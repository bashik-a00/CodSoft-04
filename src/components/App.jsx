import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import products from "../../products";
import ProductCatalog from "./ProductCatalog";
import ShoppingCart from "./ShoppingCart";
import "../style.css";

const App = () => {
  const [cartItems,setCartItems]=useState([]);

  const handleAddToCart=(product)=>{
    const productWithId={...product,id:uuidv4()};
    setCartItems([...cartItems,productWithId]);
  };
  return (
    <div>
      <ShoppingCart cartItems={cartItems} setCartItems={setCartItems}/>
      <div className="product-container">
        {products.map((product) => (
          <ProductCatalog
            key={product.id}
            img={product.image}
            name={product.name}
            desc={product.description}
            onAddToCart={()=>handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
  
};

export default App;
