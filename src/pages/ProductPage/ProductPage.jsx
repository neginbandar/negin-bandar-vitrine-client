import "./ProductPage.scss";
import productPicture from "../../assets/images/sofa-image.png";
import heartIcon from "../../assets/icons/heart.svg";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId, postId, productId } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async (userId, postId, productId) => {
    try {
      const { data } = await axios.get(
        `${backendURL}:${port}/posts/${userId}/${postId}/${productId}`
      );
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log("Error getting post");
    }
  };

  useEffect(() => {
    getProduct(userId, postId, productId);
  }, [userId, postId, productId]);

  return (
    <div className="post-page">
      <img
        className="post-page__image"
        src={product.product_image}
        alt="product-picture"
      />
      <div className="product-info">
        <div className="product-info__title">
          <h4>{product.product_name}</h4>
          <img src={heartIcon} alt="heart-icon" />
        </div>
        <p>{product.product_description}</p>
        <Link to={product.product_link}>
          <button className="button">Shop Now</button>
        </Link>
      </div>
      <div className="white-space"></div>
    </div>
  );
}
