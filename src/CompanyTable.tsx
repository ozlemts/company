import React from "react";
import {CompaniesContext} from "./companiesContext";

export const CompanyTable = () => {
  const {companyList, deleteCompany} = React.useContext(CompaniesContext) as CompanyContextType;
  return (
    <div>
      <ul>
        {companyList.map((element, index) => (
          <li key={index} className="flex justify-between">
            <p>{element.name}</p>
            <button
              name="delete"
              type="submit"
              onClick={event => deleteCompany(element.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

}