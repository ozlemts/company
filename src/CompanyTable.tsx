import React from "react";
import {CompaniesContext} from "./companiesContext";

export const CompanyTable = () => {
  const { companyList} = React.useContext(CompaniesContext) as CompanyContextType;
  return (
    <div>
      <ul>
        {companyList.map((e) => (
          <li className="flex justify-between">
            <p>{e.name}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )

}