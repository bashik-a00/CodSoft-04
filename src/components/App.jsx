import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import "../style.css";
import ProductDisplay from "./ProductDisplay";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productWithId = { ...product, id: uuidv4() };
    setCartItems([...cartItems, productWithId]);
  };
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
        <div className="e-commerce">
          <Link className="e-commerce-name" to={'/'}>
            FlipZone
          </Link>
        </div>
        <div className="goto-cart-button">
          <Link className="cart" to={"/cart"}>
            Cart
          </Link>
        </div>
        </div>
        <Routes>
          <Route
            path="/cart"
            element={
              <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
            }
          ></Route>
          <Route
            path="/"
            element={<ProductDisplay handleAddToCart={handleAddToCart} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
