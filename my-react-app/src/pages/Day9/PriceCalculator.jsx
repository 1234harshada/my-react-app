import React, { useState, useMemo, useEffect } from "react";

function PriceCalculator() {
  const [items, setItems] = useState(1);
  const [debouncedItems, setDebouncedItems] = useState(items);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedItems(items);
    }, 500);  // 500ms delay

    return () => clearTimeout(handler);
  }, [items]);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return slowFunction(debouncedItems);
  }, [debouncedItems]);

  const themeStyles = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center"
  };

  return (
    <div style={themeStyles}>
      <h2>Shopping Cart</h2>
      <input
        type="number"
        value={items}
        min="1"
        onChange={(e) => setItems(Number(e.target.value) || 1)}
        style={{ padding: "5px", width: "80px" }}
      />
      <button
        onClick={() => setDark(!dark)}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Change Theme
      </button>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

function slowFunction(quantity) {
  console.log("Slow function running...");
  for (let i = 0; i < 20000000; i++) {}  // loop chhota rakha hai
  return quantity * 499;
}

export default PriceCalculator;