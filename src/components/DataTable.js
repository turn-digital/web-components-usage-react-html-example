import React, { useState, useEffect } from "react";
import "https://1.www.s81c.com/common/carbon/web-components/version/v2.0.1/data-table.min.js";

const ParliamentMembersTable = () => {
  const [members, setMembers] = useState([]);

  const columnHeaders = [
    "Name",
    "Status",
    "PhotoURL",
    "BirthDate",
    "Gender",
    "IsCurrent",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://data.parliament.scot/api/members`
        );
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {members.length > 0 && (
        <cds-table role="table" locale="en" size="lg" with-header="">
          <cds-table-toolbar slot="toolbar" role="section" size="lg">
            <cds-table-toolbar-content size="lg" tabindex="">
              <cds-table-toolbar-search
                placeholder="Filter table"
                role="search"
                size="lg"
              ></cds-table-toolbar-search>
            </cds-table-toolbar-content>
          </cds-table-toolbar>
          <cds-table-head>
            <cds-table-header-row>
              {columnHeaders.map((header) => (
                <cds-table-header-cell key={header}>
                  {header}
                </cds-table-header-cell>
              ))}
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body role="rowgroup">
            {members.slice(0, 10).map((member) => (
              <cds-table-row key={member.PersonID}>
                <cds-table-cell>{member.PreferredName}</cds-table-cell>
                <cds-table-cell>
                  {member.IsCurrent ? "Active" : "Inactive"}
                </cds-table-cell>
                <cds-table-cell>{member.PhotoURL}</cds-table-cell>
                <cds-table-cell>{member.BirthDate}</cds-table-cell>
                <cds-table-cell>{member.GenderTypeID}</cds-table-cell>
                <cds-table-cell>{member.IsCurrent.toString()}</cds-table-cell>
              </cds-table-row>
            ))}
          </cds-table-body>
        </cds-table>
      )}
    </div>
  );
};

export default ParliamentMembersTable;
