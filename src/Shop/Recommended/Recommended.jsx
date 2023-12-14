import React from "react";
import "./recommended.css";
import uniqueFilterData from "../db/uniqueItems";
import data from "../db/data";

export default function Recommended({recommendedCompany}) {
  const uniqueCompnies = uniqueFilterData(data, "company");


  const handleBtnClick = (company, type='company') => {
    console.log(company)
recommendedCompany(company.charAt(0).toUpperCase() + company.slice(1), type)
  };

  return (
    <div className="recommended-grid">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button
          value="all"
          onClick={() => handleBtnClick('all')}
          className="btns"
          aria-label="All Products"
        >
          All Products
        </button>
        {uniqueCompnies.map((companyName) => {
          return (
            <button
              onClick={() => handleBtnClick(companyName)}
              aria-label={`${companyName}`}
             
              className="btns"
            >
              {companyName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
