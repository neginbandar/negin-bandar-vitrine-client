import "./PostPage.scss";
import postPicture from "../../assets/images/_.jpeg";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function PostPage() {
  return (
    <div className="post-page">
      <img
        className="post-page__image"
        src={postPicture}
        alt="product-picture"
      />
      <div className="product-list">
        <h2 className="product-list__title">Shop Products</h2>
        <ProductCard />
      </div>
      <div className="white-space"></div>
    </div>
  );
}
