import React, {useMemo, useState} from "react";
import {CompaniesContext} from "./companiesContext";
import {AddCompany} from "./AddCompany";

export const CompanyTable = () => {
  const {companyList, deleteCompany, sortCompanies} = React.useContext(CompaniesContext) as CompanyContextType;

  const [keyword, setKeyword] = useState('');

  const filteredCompanies = useMemo(() => {
    return (companyList.filter(o => o.name.toLowerCase().includes(keyword)));
  }, [companyList, keyword])

  return (
    <div>
      <div className="flex justify-between">
        <input type="text"
               placeholder="Search..."
               onChange={(e) => setKeyword(e.target.value)}/>
        <AddCompany/>
      </div>
      <div className="flex justify-between">
        <h6>Company Name</h6>
        <button onClick={sortCompanies}>Sort</button>
      </div>
      <ul>
        {filteredCompanies.map((element, index) => (
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