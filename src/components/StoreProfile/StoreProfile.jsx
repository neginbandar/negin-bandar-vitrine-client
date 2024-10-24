import "./StoreProfile.scss";
import profilePic from "../../assets/images/profile-pic.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StoreProfile() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [profile, setProfile] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");

  const getProfile = async () => {
    if (userId) {
      try {
        const { data } = await axios.get(
          `${backendURL}:${port}/users/${userId}`
        );
        const user = { data };
        setProfile(user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
  };

  const getProfileInfo = (profile) => {
    if (profile) {
      setProfilePic(profile.profile_pic);
      setProfileName(`${profile.first_name}  ${profile.last_name}`);
      setProfileDescription(profile.profile_about);
    } else {
      console.log("Profile not found.");
    }
  };

  useEffect(() => {
    getProfile();
    getProfileInfo();
  }, [userId]);

  return (
    <div className="profile">
      <div className="cover-photo"></div>
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
