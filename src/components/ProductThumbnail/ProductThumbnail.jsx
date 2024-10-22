import "./ProductThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link } from "react-router-dom";

export default function ProductThumbnail() {
  return (
    <div className="product__row">
      <div className="product__thumbnail">
        <Link to="/products">
          <img src={productImage} alt="Product Image" />
        </Link>
      </div>
      <div className="product__thumbnail">
        <img src={productImage} alt="Product Image" />
      </div>
      <div className="product__thumbnail">
        <img src={productImage} alt="Product Image" />
      </div>
    </div>
  );
}
