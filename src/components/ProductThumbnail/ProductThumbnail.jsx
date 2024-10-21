import "./ProductThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";

export default function ProductThumbnail() {
  return (
    <div className="product__row">
      <div className="product__thumbnail">
        <img src={productImage} alt="Product Image" />
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
