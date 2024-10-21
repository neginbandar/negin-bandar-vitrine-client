import productPicture from "../../assets/images/_.jpeg";
import "./ProductPage.scss";
import heartIcon from "../../assets/icons/heart.svg";

export default function ProductPage() {
  return (
    <div className="product-page">
      <img
        className="produc-page__image"
        src={productPicture}
        alt="product-picture"
      />
      <h2 className="product-list__title">Shop Products</h2>
      <div className="product-card">
        <div className="product-card__thumbnail">
          <img src={productPicture} alt="product-thumbnail" />
          <div className="product-card">
            <h5>Product Name</h5>
            <p>Product Description</p>
            <div className="button-group">
              <button>Shop Now</button>
              <img className="icon-small" src={heartIcon} alt="heart-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
