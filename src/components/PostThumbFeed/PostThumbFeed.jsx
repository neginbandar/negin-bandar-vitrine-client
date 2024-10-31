import "./PostThumbFeed.scss";
import productImage from "../../assets/images/_.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostThumbFeed({ posts }) {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [postPics, setPostPics] = useState([]);
  const navigate = useNavigate();

  const getPostPics = (posts) => {
    const postPictures = posts.map((post) => post.post_picture);
    setPostPics(postPictures);
    if (posts.length === 0) {
      console.log("No post picture found");
    }
  };

  useEffect(() => {
    getPostPics(posts);
  }, [posts]);

  const clickHandler = (e) => {
    const postImage = e.target.src;
    const post = posts.find((post) => post.post_picture === postImage);
    if (post) {
      const postId = post.post_id;
      const userId = post.user_id;
      console.log(postId, userId);
      navigate(`/posts/${userId}/${postId}`);
    } else {
      console.log("Post ID not found for this image.");
    }
  };

  return (
    <div className="product__row">
      {postPics.map((postPic, index) => (
        <div key={index} className="product__thumbnail" onClick={clickHandler}>
          <img src={postPic || productImage} alt={`post ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
