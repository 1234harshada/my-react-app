import React from "react";

function CartList({ cartItems, removeFromCart, updateQuantity, clearCart }) {
  const total = cartItems.reduce(
    (s, item) => s + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty!</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  border: "1px solid #eee",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold" }}>{item.title}</div>
                  <div>Price: ₹{item.price.toFixed(2)}</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) - 1)
                    }
                    style={{ padding: "6px 8px" }}
                  >
                    -
                  </button>
                  <div>{item.quantity || 1}</div>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                    style={{ padding: "6px 8px" }}
                  >
                    +
                  </button>
                </div>

                <div style={{ width: 100, textAlign: "right" }}>
                  <div style={{ fontWeight: "bold" }}>
                    ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginTop: 8,
                      padding: "6px 8px",
                      background: "transparent",
                      border: "1px solid #ccc",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, textAlign: "right" }}>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>
              Total: ₹{total.toFixed(2)}
            </div>
            <div style={{ marginTop: 10 }}>
              <button
                onClick={clearCart}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #444",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;