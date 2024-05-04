import "../styles/SeasonalItems.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function SeasonalItems() {
  const [cart, setCart] = useState([]);

  const items = [
    {
      id: 1,
      name: "Spring Bouquet",
      src: "https://via.placeholder.com/150?text=Spring+Bouquet",
      price: "$25",
    },
    {
      id: 2,
      name: "Summer Festival",
      src: "https://via.placeholder.com/150?text=Summer+Festival",
      price: "$30",
    },
    {
      id: 3,
      name: "Autumn Wreath",
      src: "https://via.placeholder.com/150?text=Autumn+Wreath",
      price: "$28",
    },
    {
      id: 4,
      name: "Winter Garland",
      src: "https://via.placeholder.com/150?text=Winter+Garland",
      price: "$35",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handlePurchase = () => {
    alert(`Purchasing ${cart.length} items!`);
    setCart([]); // Clear the cart after purchase
  };

  return (
    <>
      <Navbar />
      <div className="seasonal-items">
        <h1>Seasonal Items</h1>
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.src} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div>
            <button onClick={handlePurchase}>Make Purchase</button>
          </div>
        )}
      </div>
    </>
  );
}

export default SeasonalItems;
