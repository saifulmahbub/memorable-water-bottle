import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottoles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottoles(data));
  }, []);
  const handleToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      <h2>bottles all are here :{bottles.length}</h2>
      <h2>Bottles in Cart:{cart.length}</h2>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleToCart={handleToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
