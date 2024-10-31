import "./PostUploadPage.scss";
import addButon from "../../assets/icons/plus-circle.svg";
import { useState } from "react";
import axios from "axios";
import AddProduct from "../../components/AddProduct/AddProduct";
import { useParams } from "react-router-dom";

export default function PostUploadPage() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [postImage, setPostImage] = useState("");
  const [products, setProducts] = useState([]);
  const { userId } = useParams();

  const addProductHandler = () => {
    setProducts([...products, <AddProduct key={products.length} />]);
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  const addNewPost = async (newPost) => {
    try {
      const response = await axios.post(`${backendURL}:${port}/posts`, newPost);
    } catch (error) {
      console.log("Error adding new post");
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post-image", postImage);
    try {
      const response = await axios.post(
        `${backendURL}:${port}/uploads`,
        formData
      );
      console.log("Image upload success:", response);

      const newPost = {
        user_id: userId,
        post_picture: `${backendURL}:${port}/${response.data.postImageUrl}`,
      };
      addNewPost(newPost);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  return (
    <div className="post-upload__container">
      <div className="new-post-header">
        <button className="button button--cancel">Cancel</button>
        <h4 className="new-post-header__title">Create a new post</h4>
        <button className="button button--submit">Publish</button>
      </div>

      <form
        method="post"
        encType="multipart/form-data"
        className="post-upload_form"
        onSubmit={uploadImage}
      >
        <div className="post-upload__field">
          <label htmlFor="Upload">Upload Post Photo</label>
          <div className="post-upload__align">
            <input
              type="file"
              className="form-control-file "
              name="post-image"
              onChange={handleImageChange}
            />
            <button
              type="upload"
              className="button button--upload"
              onClick={uploadImage}
            >
              Upload Photo
            </button>
          </div>
        </div>
      </form>
      <h5>Product Information</h5>
      <AddProduct />
      {products}
      <div className="button-group">
        <button
          className="button button--left"
          type="button "
          onClick={addProductHandler}
        >
          Add New Product
        </button>
        <button className="button button--right" type="submit">
          Publish Post
        </button>
      </div>
      <div className="white-space"></div>
    </div>
  );
}
