import "./ProductCard.scss";
import productPicture from "../../assets/images/sofa-image.png";
import heartIcon from "../../assets/icons/heart.svg";

export default function ProductCard({ products }) {
  return (
    <div className="product-card__container">
      {products.map((product) => (
        <div key={product.product_id} className="product-card">
          <img
            className="product-card__image"
            src={product.product_image}
            alt={product.product_name}
          />
          <div className="product-card__info">
            <h3>{product.product_name}</h3>
            <p>{product.product_description}</p>
            <img src={heartIcon} className="icon-small" />
            <button
              className="button"
              key={`button-group-${product.product_id}`}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
