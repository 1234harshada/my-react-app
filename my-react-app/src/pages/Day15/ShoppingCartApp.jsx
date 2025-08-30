import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 🔹 Redux Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 20000 },
      { id: 3, name: "Headphones", price: 2000 },
      { id: 4, name: "Keyboard", price: 1500 },
    ],
    cart: [],
    search: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const found = state.cart.find(p => p.id === action.payload.id);
      if (found) found.quantity += 1;
      else state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(p => p.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.cart.find(p => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setSearch: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
  },
});

const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, setSearch } =
  cartSlice.actions;

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

// 🔹 Updated Inline CSS
const styles = {
  container: { 
    display: "flex", 
    justifyContent: "center",           // horizontally center
    alignItems: "flex-start",          // top aligned; change to "center" if vertical center chahiye
    minHeight: "100vh",                // full screen height
    backgroundColor: "#f0f0f0",       // light grey background
    padding: "40px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif"
  },
  box: { 
    width: "400px",                    // fixed width for box
    padding: "20px", 
    border: "1px solid #ccc", 
    borderRadius: "10px", 
    margin: "0 20px",                  // space between boxes
    backgroundColor: "Black",           // white background
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  input: { 
    padding: "8px", 
    marginBottom: "15px", 
    width: "100%", 
    boxSizing: "border-box" 
  },
  button: { 
    margin: "0 5px", 
    padding: "5px 10px", 
    cursor: "pointer" 
  },
  item: { 
    marginBottom: "12px" 
  }
};

// 🔹 Products Component
function Products() {
  const dispatch = useDispatch();
  const { products, search } = useSelector(state => state.cart);

  const filtered = products.filter(p => p.name.toLowerCase().includes(search));

  return (
    <div style={styles.box}>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map(p => (
          <li key={p.id} style={styles.item}>
            {p.name} - ₹{p.price}
            <button style={styles.button} onClick={() => dispatch(addToCart(p))}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🔹 Cart Component
function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={styles.box}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={styles.item}>
              {item.name} - ₹{item.price} × {item.quantity}
              <button style={styles.button} onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button style={styles.button} onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button style={styles.button} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button style={styles.button} onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

// 🔹 Main App
function ShoppingCartApp() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default ShoppingCartApp;