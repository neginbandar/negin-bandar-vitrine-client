import "./StoreProfile.scss";
import profilePic from "../../assets/images/profile-pic.jpg";

export default function StorePro() {
  return (
    <div className="profile">
      <div className="cover-photo"></div>
      <div className="profile__info">
        <div className="profile__pic">
          <img src={profilePic} alt="profie-picture" />
        </div>
        <h2 className="profile__name">Linda Rich</h2>
        <p className="profile__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
          orci dui. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
}
