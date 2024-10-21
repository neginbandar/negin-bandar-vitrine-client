import productPicture from "../../assets/images/_.jpeg";

export default function ProductPage() {
  return (
    <div className="product-page">
      <img
        className="produc-page__image"
        src={productPicture}
        alt="product-picture"
      />
      <div className="product-list">
        <h2 className="product-list__title">Shop Products</h2>
        <div className="product-list__thumbnail">
          <img src={productPicture} alt="product-thumbnail" />
        </div>
      </div>
    </div>
  );
}
