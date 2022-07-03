import React, {useState} from 'react';
import {CompaniesContext} from "./companiesContext";

export const AddCompany = () => {

  const {addCompany} = React.useContext(CompaniesContext) as CompanyContextType;
  const [keyword, setKeyword] = useState('');
  const error: string = 'Company name cannot be empty!'

  return (
    <div className="add-box">
      <input
        name="companyName"
        placeholder="Company Name"
        type="text"
        onChange={(event) => {
          setKeyword(event.target.value)
        }}
      />
      <button onClick={
        () => (keyword.length > 1 ? addCompany(keyword) : (alert(error)))
      }>Add
      </button>
    </div>
  );
}

