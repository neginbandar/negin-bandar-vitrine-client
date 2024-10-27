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
  useEffect(() => {
    if (userId) {
      getPosts(userId);
      console.log(posts, postPics);
    }
  }, [userId]);

  return (
    <div className="product__row">
      {postPics.map((postPic, index) => (
        <div key={index} className="product__thumbnail">
          <Link to={`/posts/${userId}`}>
            <img src={postPic || productImage} alt={`Post ${index + 1}`} />
          </Link>
        </div>
      ))}
    </div>
  );
}
