import "./PostPage.scss";
import productPicture from "../../assets/images/sofa-image.png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function PostPage() {
  return (
    <div className="post-page">
      <img
        className="post-page__image"
        src={productPicture}
        alt="product-picture"
      />
      <div className="product-list">
        <h2 className="product-list__title">Shop Products</h2>
        <ProductCard />
      </div>
    </div>
  );
}
