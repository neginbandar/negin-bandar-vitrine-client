import "./StoreProfile.scss";
// import profilePic from "../../assets/images/profile-pic.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StoreProfile({ profile }) {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [profilePic, setProfilePic] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");

  const getProfileInfo = (profile) => {
    if (profile) {
      setProfilePic(profile.profile_picture);
      setProfileName(`${profile.first_name} ${profile.last_name}`);
      setProfileDescription(profile.profile_about);
    } else {
      console.log("Profile not found.");
    }
  };

  useEffect(() => {
    getProfileInfo(profile);
  }, [profile]);

  return (
    <div className="profile">
      <div className="cover-photo">
        <h3 className="cover-photo__message"></h3>
      </div>
      <div className="profile__info">
        <div className="profile__pic">
          <img src={profilePic} alt="profie-picture" />
        </div>
        <h2 className="profile__name">{profileName}</h2>
        <p className="profile__description">{profileDescription}</p>
      </div>
    </div>
  );
}
