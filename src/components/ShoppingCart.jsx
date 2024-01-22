const ShoppingCart = ({cartItems,setCartItems }) =>{
  const handleRemoveFromCart = (productId)=>{
    setCartItems((prevCartItems)=>prevCartItems.filter((product)=>product.id!==productId));
  };

  return(
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((product)=>(
          <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.name} className="product-img" />
          <div className="cart-item-details">
            <p className="cart-item-name">{product.name}</p>
            <p className="cart-item-description">{product.description}</p>
            <p className="cart-item-price">${product.price/100}</p>
            <button onClick={()=>handleRemoveFromCart(product.id)} className="remove-button">Remove</button>
          </div>
          </div>
        ))}
      </div>
      {cartItems.length>0?(
        <div className="cart-summary">
          <p>Total: ${cartItems.reduce((total,product)=>total+product.price,0)/100}</p>
          </div>
      ):(<p className="cart-empty">Your cart is empty</p>)}
    </div>
  )
}

export default ShoppingCart;