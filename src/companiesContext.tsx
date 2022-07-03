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

const CompaniesProvider: React.FC<Props> = ({children}) => {
  const [companyList, setCompanyList] = useState(initialCompanies);

  return <CompaniesContext.Provider value={{companyList}}>{children}</CompaniesContext.Provider>;
};
export default CompaniesProvider;