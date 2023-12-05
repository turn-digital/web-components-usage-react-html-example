import "./App.css";
import Header from "./components/Header";
import ParliamentMembersTable from "./components/DataTable";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: "50px" }}>
        <ParliamentMembersTable />
      </div>
    </div>
  );
};

export default App;
