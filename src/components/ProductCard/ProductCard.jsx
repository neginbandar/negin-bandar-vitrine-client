import "./ProductCard.scss";
import productPicture from "../../assets/images/_.jpeg";
import heartIcon from "../../assets/icons/heart.svg";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default function ProductCard({}) {
  return (
    <div className="product-card">
      <img src={productPicture} alt="product-thumbnail" />
      <div className="product-card__info">
        <h5>Product Name</h5>
        <p>Product Description</p>
        <ButtonGroup />
      </div>
    </div>
  );
}
