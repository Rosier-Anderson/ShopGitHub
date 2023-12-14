import React, { useEffect } from "react";
import "./colors.css";
import Input from "../../../componentsShop/Input";
import data from "/workspace/src/Shop/db/data.js";
import uniqueFilterData from "../../db/uniqueItems";
import { v4 as uuidv4 } from "uuid";
var uniqueColorsArray = uniqueFilterData(data, "color");

export default function Colors({ color }) {
  const handleItemClick = (colors, type='color') => {
    color(colors, type);
  };
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <ul>
        {uniqueColorsArray.sort().map((colors) => {
          let filteredColors = colors.charAt(0).toUpperCase() + colors.slice(1);
          let id = uuidv4();
          return (
            <li
              id={id}
              aria-label="test2"
              key={id}
              onClick={() => handleItemClick(colors)}
              className="sidebar-label-container "
            >
              <input type="radio" name="test2" aria-label="test32" />
              <span role="button" className="checkmark">
                {" "}
              </span>
              {filteredColors}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
