import "./UploadForm.scss";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UploadForm() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [postImage, setPostImage] = useState("");
  const { userId } = useParams;

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

  return (
    <form
      method="post"
      encType="multipart/form-data"
      className="post-upload_form"
      onSubmit={uploadImage}
    >
      <div className="post-upload__field">
        <label htmlFor="Upload">Add Post Photo</label>
        <div className="post-upload__align">
          <input
            type="file"
            className="form-control-file"
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
  );
}
