import "../style.css";

const ProductCatalog = ({ name, desc, img, onAddToCart, price }) => {
  return (
    <div>
      <img className="product-img" src={img} alt="" />
      <p className="product-disc">{desc}</p>
      <p className="product-name">{name}</p>
      <p className="product-price">${price / 100}</p>
      <button className="cart-button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCatalog;
