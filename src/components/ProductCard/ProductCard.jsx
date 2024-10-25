import "./ProductCard.scss";
import productPicture from "../../assets/images/sofa-image.png";
import heartIcon from "../../assets/icons/heart.svg";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCard() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  const getPosts = async (userId) => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts/${userId}`);
      const posts = data;
      setPosts(posts);
      console.log(posts, "posts");
      if (data) {
        const allProducts = data.flatMap((post) => post.products);
        setProducts(allProducts);
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
      console.log(posts, products);
    }
  }, [userId]);

  useEffect(() => {
    console.log(posts, products);
  }, [posts, products]);

  return (
    <div className="product-card__container">
      {products.map((product) => (
        <div key={product.product_id} className="product-card">
          <img src={product.product_image} alt={product.product_name} />
          <div className="product-card__info">
            <h3>{product.product_name}</h3>
            <p>{product.product_description}</p>
            <ButtonGroup
              link={product.product_link}
              key={`button-group-${product.product_id}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
