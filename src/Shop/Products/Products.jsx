import React from "react";
import "./products.css";
import data from "/workspace/src/Shop/db/data.js";
import Card from "../../componentsShop/Card";
const MemoizedCard = React.memo(Card);

export default function Products({ renderData }) {
let id = 0;
  return (
    <section className="card-container card-container-grid">
      {renderData.map((item) => (
     
        <MemoizedCard key={id++}  {...item} />
      ))}
    </section>
  );
}
