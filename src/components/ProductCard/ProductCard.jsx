import "./ProductCard.scss";
import productPicture from "../../assets/images/sofa-image.png";
import heartIcon from "../../assets/icons/heart.svg";
import { useNavigate } from "react-router-dom";
import ProductPage from "../../pages/ProductPage/ProductPage";

export default function ProductCard({ postId, products, userId }) {
  const navigate = useNavigate();
  const productInfoHandler = (e) => {
    const productId = e.target.id;
    console.log(e.target.id);
    navigate(`/posts/${userId}/${postId}/${productId}`);
  };

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
            <div className="product-card__header">
              <h3>{product.product_name}</h3>
              <img src={heartIcon} className="icon-small" />
            </div>
            <p>{product.product_description}</p>
            <button
              className="button"
              key={`button-group-${product.product_id}`}
              onClick={productInfoHandler}
              id={product.product_id}
            >
              More Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
