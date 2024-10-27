import StoreProfile from "../../components/StoreProfile/StoreProfile";
import PostThumbnail from "../../components/PostThumbnail/PostThumbnail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StoreProfilePage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [profile, setProfile] = useState("");

  const getProfile = async () => {
    if (userId) {
      try {
        const { data } = await axios.get(
          `${backendURL}:${port}/users/${userId}`
        );
        const user = data;
        setProfile(user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
  };
  useEffect(() => {
    getProfile();
  }, [userId]);

  return (
    <>
      <StoreProfile profile={profile} />
      <PostThumbnail />
    </>
  );
}
