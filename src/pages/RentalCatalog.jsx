import "../styles/RentalCatalog.css";
import Navbar from "../components/Navbar";
import React, { useState } from "react";

function RentalItems() {
  const [cart, setCart] = useState([]);

  const items = [
    {
      id: 1,
      name: "Deluxe Party Pack",
      src: "https://via.placeholder.com/150?text=Deluxe+Party+Pack",
      price: "$45",
    },
    {
      id: 2,
      name: "Wedding Decor Set",
      src: "https://via.placeholder.com/150?text=Wedding+Decor+Set",
      price: "$120",
    },
    {
      id: 3,
      name: "Corporate Event Kit",
      src: "https://via.placeholder.com/150?text=Corporate+Event+Kit",
      price: "$200",
    },
    {
      id: 4,
      name: "Birthday Bash Supplies",
      src: "https://via.placeholder.com/150?text=Birthday+Bash+Supplies",
      price: "$85",
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
      <div className="rental-items">
        <h1>rental catalog</h1>
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

export default RentalItems;
