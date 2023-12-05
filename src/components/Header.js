import React from "react";
import "https://1.www.s81c.com/common/carbon/web-components/version/v2.0.1/ui-shell.min.js";

const Header = () => {
  return (
    <div>
      <cds-header aria-label="IBM Platform Name" role="banner">
        <cds-header-name href="javascript:void 0" prefix="IBM">
          [Platform]
        </cds-header-name>
        <div className="cds--header__global">
          <cds-header-global-action
            aria-label="Search"
            tooltip-text="Search"
            kind="primary"
            size="lg"
            tooltip-alignment=""
            tooltip-position="bottom"
            type="button"
          >
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              slot="icon"
            >
              <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path>
            </svg>
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="Notification"
            tooltip-text="Notification"
            kind="primary"
            size="lg"
            tooltip-alignment=""
            tooltip-position="bottom"
            type="button"
          >
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              slot="icon"
            >
              <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path>
            </svg>
          </cds-header-global-action>
          <cds-header-global-action
            aria-label="App Switcher"
            tooltip-text="App Switcher"
            tooltip-alignment="right"
            kind="primary"
            size="lg"
            tooltip-position="bottom"
            type="button"
          >
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              slot="icon"
            >
              <path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path>
            </svg>
          </cds-header-global-action>
        </div>
      </cds-header>
    </div>
  );
};

export default Header;
