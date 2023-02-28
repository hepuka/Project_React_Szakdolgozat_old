import React from "react";
import myImage from "../img/cafe.png";
import "../App.css";

const KunPaosCoffee = () => {
  const myStyle = {
    alignitems: "center",
  };

  return (
    <div className="img">
      <h1>KUNPAO'S COFFEE MANAGEMENT SYSTEM</h1>
      <img src={myImage} alt="picture" />
    </div>
  );
};

export default KunPaosCoffee;
