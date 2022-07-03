import React from 'react';
import {CompanyTable} from "./CompanyTable";
import {AddCompany} from "./AddCompany";

function App() {
  return (
    <div className="box">
      <h1>Companies Table with TS & React</h1>
      <AddCompany/>
      <CompanyTable/>
    </div>
  );
}

export default App;
