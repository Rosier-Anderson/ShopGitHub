import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./sidebar2.css";


import Category from "./Category/Category";
export default function SideBar({ handlers }) {
  const { handleCategory, handlePrice, handleColor } = handlers;
  return (
    <>
      <section className="sidebar2 sidebar-grid">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category onData={handleCategory} />
        <Price handlePrice={handlePrice} />
        <Colors color={handleColor} />
      </section>
    </>
  );
}
