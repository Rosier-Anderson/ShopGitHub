import React, { useState } from "react";
import "./price.css";

import uniqueFilterData from "../../db/uniqueItems";
import { v4 as uuidv4 } from "uuid";
import data from "/workspace/src/Shop/db/data.js";

const uniquePricesArray = uniqueFilterData(data, "newPrice");

export default function Price({ handlePrice }) {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleItemClick = (price, type='price') => {
    setSelectedPrice(price);
    handlePrice(price, type);
  };

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <ul>
        {uniquePricesArray
          .sort((a, b) => a - b)
          .map((price, index) => {
            const id = uuidv4();
            const priceRange = getPriceRange(index);

            return (
              <li
                key={id}
                className={`sidebar-label-container ${
                  price === selectedPrice ? "selected" : ""
                }`}
              >
                <input
                  checked={price === selectedPrice ? true : null}
                  type="radio"
                  name="price"
                  aria-label={`price-${index}`}
                  onChange={() => handleItemClick(price)}
                />
                <span role="button" className="checkmark"></span>
                {priceRange}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

function getPriceRange(index) {
  // Placeholder logic, modify based on your requirements
  const lowerBound = index * 50;
  const upperBound = (index + 1) * 50 - 1;
  return `$${lowerBound}-${upperBound + 1}`;
}
