import React from "react";

export const CompanyTable = () => {
  const data: Array<companyType> = [
    {"id": 145, "name": "Google"},
    {"id": 496, "name": "Amazon"},
    {"id": 129, "name": "Facebook"},
    {"id": 593, "name": "Apple"},
    {"id": 952, "name": "Samsung"},
    {"id": 819, "name": "Microsoft"},
    {"id": 427, "name": "Tesla"},
    {"id": 901, "name": "Alibaba"}
  ]

  return (
    <div>
      <ul>
        {data.map((e) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  )

}