import products from "../../products";
import ProductCatalog from "./ProductCatalog";
const ProductDisplay = ({ handleAddToCart }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCatalog
          key={product.id}
          img={product.image}
          name={product.name}
          desc={product.description}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductDisplay;
