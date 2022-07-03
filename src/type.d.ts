type companyType = {
  id: number,
  name: string
}

type CompanyContextType = {
  companyList: companyType[];
  deleteCompany: (id: number) => void;
}