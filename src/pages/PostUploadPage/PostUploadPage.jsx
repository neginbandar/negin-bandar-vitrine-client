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

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append("post-image", postImage);
    try {
      const response = await axios.post(
        `${backendURL}:${port}/uploads`,
        formData
      );
      console.log("Image upload success:", response.data);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  const postSubmitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      user_id: userId,
      // created_at: new Date(),
    };
    // console.log(newPost);
    // try {
    //   const response = await axios.post(`${backendURL}:${port}/posts`, newPost);
    //   console.log("Post created successfully:", response.data);
    // } catch (error) {
    //   console.log("Error creating post:", error);
    // }
  };

  return (
    <div className="post-upload__container">
      <h3 className="post-upload__title">Create Post</h3>
      <form
        method="post"
        encType="multipart/form-data"
        className="post-upload_form"
        onSubmit={postSubmitHandler}
      >
        <div className="mb-3">
          <label htmlFor="Upload">Upload Image</label>
          <input
            type="file"
            className="form-control-file"
            name="post-image"
            onChange={handleImageChange}
          />
          <button type="upload" className="button" onClick={uploadImage}>
            Upload
          </button>
        </div>
      </form>
      <h4>Add Product</h4>
      <AddProduct />
      {/* <h3>Product # {products.index} </h3> */}
      {products}
      <button className="button" type="button" onClick={addProductHandler}>
        Add Product
      </button>
      <button className="button" type="submit">
        Submit Post
      </button>
      <div className="white-space"></div>
    </div>
  );
}
