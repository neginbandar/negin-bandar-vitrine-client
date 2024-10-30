import "./FeedPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PostFeed from "../../components/PostFeed/PostFeed";

export default function FeedPage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [categories, setCategories] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/categories`);
      const categoryList = data;
      const removeDups = [...new Set(categoryList)];
      setCategories(removeDups);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message);
    }
  };

  const getPosts = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/posts`);
      const posts = data;
      console.log(productCategory);
      const filteredPosts = data.filter((post) =>
        post.products.some(
          (product) => product.product_category === productCategory
        )
      );
      console.log(filteredPosts);
      setPosts(filteredPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
    setShowPosts(false);
  };

  const handleSearchClick = () => {
    getPosts();
    setShowPosts(true);
  };

  useEffect(() => {
    getCategories();
  });

  return (
    <div className="feed-page">
      <div className="feed-page__search">
        <label htmlFor="category">Search for Product Category</label>
        <select
          id="category"
          className="form-control"
          value={productCategory}
          onChange={handleProductCategoryChange}
        >
          <option value="" disabled defaultValue>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {showPosts && <PostFeed posts={posts} />}
    </div>
  );
}
