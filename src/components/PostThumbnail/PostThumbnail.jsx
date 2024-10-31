import "./PostThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostThumbnail() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [postPics, setPostPics] = useState([]);
  const navigate = useNavigate();

  const getPosts = async (userId) => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts/${userId}`);
      setPosts(data);
      console.log(data);

      if (data) {
        const postPictures = data.map((post) => post.post_picture);
        setPostPics(postPictures);
      } else {
        console.log("No post picture found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clickHandler = (e) => {
    const postImage = e.target.src;
    const post = posts.find((post) => post.post_picture === postImage);
    if (post) {
      const postId = post.post_id;
      navigate(`/posts/${userId}/${postId}`);
    } else {
      console.log("Post ID not found for this image.");
    }
  };
  useEffect(() => {
    if (userId) {
      getPosts(userId);
    }
  }, [userId]);

  return (
    <div className="post__row">
      {postPics.map((postPic, index) => (
        <div key={index} className="post__thumbnail" onClick={clickHandler}>
          <img src={postPic || productImage} alt="post image" />
        </div>
      ))}
    </div>
  );
}
