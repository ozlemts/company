import React from "react";
import {CompaniesContext} from "./companiesContext";

export const CompanyTable = () => {
  const { companyList} = React.useContext(CompaniesContext) as CompanyContextType;
  return (
    <div>
      <ul>
        {companyList.map((e) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  )

}