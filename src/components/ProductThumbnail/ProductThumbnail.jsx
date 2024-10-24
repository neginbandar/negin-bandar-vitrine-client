import "./ProductThumbnail.scss";
import productImage from "../../assets/images/_.jpeg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductThumbnail() {
  const { userId } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async (userId) => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts/${userId}`);
      const posts = { data };
      if (posts) {
        // Extract products from each post, using flatMap to combine all products into a single array
        const allProducts = posts.flatMap((post) => post.products); // Safeguard in case products are missing
        setProducts(allProducts);
      } else {
        console.log("No products found");
      }
      // Set the products state with the collected products
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (userId) {
      getProducts(userId);
    }
  }, [userId]);

  return (
    <div className="product__row">
      <div className="product__thumbnail">
        <Link to={`/posts/${userId}`}>
          <img src={products[0]?.product_image || productImage} alt="Product" />
        </Link>
      </div>
    </div>
  );
}
