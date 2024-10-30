import "./PostFeed.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostFeed({ posts }) {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [postPics, setPostPics] = useState([]);
  const [postId, setPostId] = useState();

  const getPosts = (posts) => {
    const postPictures = posts.map((post) => post.post_picture);
    setPostPics(postPictures);
    if (posts.length === 0) {
      console.log("No post picture found");
    }
  };

  useEffect(() => {
    getPosts(posts);
  }, [posts]);

  const getPostId = async (userId, postImage) => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts/${userId}`);
      const posts = data;
      const post = posts.find((post) => post.post_picture === postImage);
      setPostId(post.post_id);
    } catch (error) {
      console.error(error);
    }
  };

  const clickHandler = (e) => {
    const postImage = e.target.src;
    getPostId(userId, postImage);
  };

  return (
    <div className="product__row">
      {postPics.map((postPic, index) => (
        <div key={index} className="product__thumbnail" onClick={clickHandler}>
          <Link to={`/posts/${userId}/${postId}`}>
            <img src={postPic || productImage} alt={`post ${index + 1}`} />
          </Link>
        </div>
      ))}
    </div>
  );
}
