import "./ButtonGroup.scss";
import heartIcon from "../../assets/icons/heart.svg";

export default function ButtonGroup() {
  return (
    <div className="button-group">
      <button>Shop Now</button>
      <img className="icon-small" src={heartIcon} alt="heart-icon" />
    </div>
  );
}
