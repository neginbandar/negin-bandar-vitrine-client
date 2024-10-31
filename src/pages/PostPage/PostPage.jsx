import "./PostPage.scss";
import postPicture from "../../assets/images/_.jpeg";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostPage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId, postId } = useParams();
  const [post, setPost] = useState();
  const [products, setProducts] = useState([]);

  const getPost = async (userId, postId) => {
    try {
      const { data } = await axios.get(
        `${backendURL}:${port}/posts/${userId}/${postId}`
      );
      const post = data;
      setPost(data);
      console.log(post, "post");
      if (data) {
        const allProducts = data.products;
        setProducts(allProducts);
        console.log(products);
      } else {
        console.log("Product picture not found");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if ((userId, postId)) {
      getPost(userId, postId);
      console.log(post, products);
    } else {
      console.log(" No post found");
    }
  }, [userId, postId]);

  return (
    <div className="post-page">
      <img
        className="post-page__image"
        src={postPicture}
        alt="product-picture"
      />
      <div className="product-list">
        <h2 className="product-list__title">Shop Products</h2>
        <ProductCard products={products} userId={userId} postId={postId} />
      </div>
      <div className="white-space"></div>
    </div>
  );
}
