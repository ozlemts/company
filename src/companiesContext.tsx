import React, {createContext, ReactNode, useState} from "react";

interface Props {
  children: ReactNode
}

export const CompaniesContext = createContext<CompanyContextType | null>(null);

const initialCompanies: Array<companyType> = [
  {"id": 145, "name": "Google"},
  {"id": 496, "name": "Amazon"},
  {"id": 129, "name": "Facebook"},
  {"id": 593, "name": "Apple"},
  {"id": 952, "name": "Samsung"},
  {"id": 819, "name": "Microsoft"},
  {"id": 427, "name": "Tesla"},
  {"id": 901, "name": "Alibaba"}
]

const CompaniesProvider: React.FC<Props> =
  ({children}) => {

    const [companyList, setCompanyList] = useState(initialCompanies);

    const deleteCompany = (id: number) => {
      setCompanyList(prevCompany => [...prevCompany]
        .filter(e => e.id !== id)
      );
    };

    const addCompany = (name: string) => {
      const newCompany: companyType = {
        id: Math.floor(100 + Math.random() * (1000 - 100)), // to do: check uniqueness
        name: name,
      };
      setCompanyList(prevCompany => [...prevCompany, newCompany]);
    };

    return <CompaniesContext.Provider value={{companyList, deleteCompany, addCompany}}>{children}</CompaniesContext.Provider>;
  };
export default CompaniesProvider;