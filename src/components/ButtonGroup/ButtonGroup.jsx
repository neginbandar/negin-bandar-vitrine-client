import "./ButtonGroup.scss";
import heartIcon from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";

export default function ButtonGroup() {
  const url = "https://ca.pinterest.com/search/pins/?q=sofa&rs=typed";

  return (
    <div className="button-group">
      <img className="icon-small" src={heartIcon} alt="heart-icon" />
      <Link to="https://ca.pinterest.com/search/pins/?q=sofa&rs=typed">
        <button className="button "> Shop Now </button>
      </Link>
    </div>
  );
}
