import "./PostUploadPage.scss";
import addButon from "../../assets/icons/plus-circle.svg";
import { useState } from "react";
import axios from "axios";

export default function PostUploadPage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [postImage, setPostImage] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productLink, setProductLink] = useState("");

  const handleImageChange = (e) => {
    setPostImage(e.target.value);
  };
  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };
  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };
  const handleProductLinkChange = (e) => {
    setProductLink(e.target.value);
  };

  const isFormValid = () => {
    if (!postImage) {
      return false;
    }
    return true;
  };

  const postNewPost = async (newPost) => {
    try {
      const { data } = await axios.post(
        `${backendURL}:${port}/posts`,
        newPost,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Error posting new post");
    }
  };

  const postSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const newPost = {
        post_picture: postImage,
        products: [
          {
            product_image: productImage,
            product_category: productCategory,
            product_link: productLink,
          },
        ],
      };
      console.log(newPost);
      postNewPost(newPost);
    }
  };

  return (
    <div className="post-upload__container">
      <h3 className="post-upload__title">Create Post</h3>
      <form className="post-upload_form" onSubmit={postSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Upload Image</label>
          <input
            type="text"
            placeholder="upload image"
            className="form-control"
            value={postImage}
            onChange={handleImageChange}
          />
        </div>
        <div className="add-group">
          <h4>Add Product</h4>
          <img className="icon-small" src={addButon} alt="Add Button" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Upload Product Image</label>
          <input
            type="text"
            placeholder="upload product image"
            className="form-control"
            value={productImage}
            onChange={handleProductImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Product Category</label>
          <input
            type="text"
            placeholder="product category"
            className="form-control"
            value={productCategory}
            onChange={handleProductCategoryChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Add Link to Product</label>
          <input
            type="text"
            placeholder="link to product website"
            className="form-control"
            value={productLink}
            onChange={handleProductLinkChange}
          />
        </div>
        <button className="button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
