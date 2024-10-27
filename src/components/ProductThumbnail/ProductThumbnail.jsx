import "./ProductThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductThumbnail() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [postPic, setPostPic] = useState();
  //const [products, setProducts] = useState([]);

  const getPosts = async (userId) => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts/${userId}`);
      const posts = data;
      setPosts(posts);

      if (posts) {
        const postPic = posts.map((post) => post.post_picture);
        setPostPic(postPic);
      } else {
        console.log("Product picture not found");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (userId) {
      getPosts(userId);
      console.log(posts, postPic);
    }
  }, [userId]);

  return (
    <div className="product__row">
      <div className="product__thumbnail">
        <Link to={`/posts/${userId}`}>
          <img src={posts[0]?.post_picture || postPic} alt="Post picture" />
        </Link>
      </div>
    </div>
  );
}
