import React from "react";
import "./category.css";
import data from "/workspace/src/Shop/db/data.js";
import uniqueFilterData from "../../db/uniqueItems";
import { v4 as uuidv4 } from "uuid";

export default function Category({ onData }) {
  const uniqueCategories = uniqueFilterData(data, "category");

  const handleCategoryClick = (category, type='category') => {
    onData(category, type);
  };

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <ul>
        {uniqueCategories.map((category) => {
          const formattedCategory =
            category.charAt(0).toUpperCase() + category.slice(1);
          const id = uuidv4();

          return (
            <li
              key={id}
              id={id}
              aria-label={`category-item-${formattedCategory.toLowerCase()}`}
              onClick={() => handleCategoryClick(category)}
              className="sidebar-label-container"
            >
              <input
                type="radio"
                name="categoryRadio"
                aria-label={`category-radio-${formattedCategory.toLowerCase()}`}
              />
              <span role="button" className="checkmark"></span>
              {formattedCategory}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
