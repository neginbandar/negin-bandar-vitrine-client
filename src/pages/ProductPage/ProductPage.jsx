import "./ProductPage.scss";
import productPicture from "../../assets/images/sofa-image.png";
import heartIcon from "../../assets/icons/heart.svg";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

export default function ProductPage() {
  return (
    <div className="post-page">
      <img
        className="post-page__image"
        src={productPicture}
        alt="product-picture"
      />
      <div className="product-info">
        <h2 className="product-info__title">More Info</h2>
        <p>
          Fusce tristique vehicula ante, non hendrerit ante dictum non. Sed
          lacinia tristique metus, vel viverra massa pulvinar vel. Proin
          malesuada sed tellus at tempus. Mauris consectetur urna at malesuada
          convallis. Nam ut cursus mauris, id commodo magna. Aliquam ultrices
          luctus nisi, a ultrices est ornare in.
        </p>
        <ButtonGroup />
      </div>
    </div>
  );
}
