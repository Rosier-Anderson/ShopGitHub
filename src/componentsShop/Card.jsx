import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
export default function Card({ img, title, newPrice, prevPrice, star }) {
  return (
    <div>
      <section className="card">
        <img
          
          src={img}
          alt={` ${title} Shoe picture`}
          className="card-img img-style"
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
