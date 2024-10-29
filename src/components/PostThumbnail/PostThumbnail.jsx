import "./PostThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostThumbnail() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [postPics, setPostPics] = useState([]);
  const [postId, setPostId] = useState();

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

  useEffect(() => {
    if (userId) {
      getPosts(userId);
      console.log(posts, postPics);
    }
  }, [userId]);

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
