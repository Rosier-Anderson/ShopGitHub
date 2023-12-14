import "./index.css";
import data from "./Shop/db/data";

import Navigation from "./Shop/Navigation/Navigation";
import Products from "./Shop/Products/Products";
import Recommended from "./Shop/Recommended/Recommended";
import SideBar from "./Shop/Sidebar/SideBar";

import { useState } from "react";
  
{
  /* Shop  Ends here */
}

export default function App() {
  const [receiverData, setReceiverData] = useState(data);

  const handleData = (value, type) => {
   
    let filteredArray = data.filter((props) => props[type] == value);
    setReceiverData(filteredArray);
  };

  console.log("i receive data", receiverData);

  return (
    <div className="wrapper">
      <SideBar
        handlers={{
          handleCategory: (category, type) => handleData(category, type),
          handlePrice: (price, type) => handleData(price, type),
          handleColor: (color, type) => handleData(color, type),
        }}
      />
      <Navigation />

      <Recommended recommendedCompany={ handleData}/>
      <Products renderData={receiverData} />
    </div>
  );
}
