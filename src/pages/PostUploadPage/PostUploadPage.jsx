import "./PostUploadPage.scss";
import addButon from "../../assets/icons/plus-circle.svg";

export default function PostUploadPage() {
  return (
    <div className="post-upload__container">
      <h3 className="post-upload__title">Create Post</h3>
      <form className="post-upload_form">
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1">Upload Image</label>
          <input
            type="text"
            placeholder="upload image"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="add-group">
          <h4>Add Product</h4>
          <img className="icon-small" src={addButon} alt="Add Button" />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1">Upload Product Image</label>
          <input
            type="text"
            placeholder="upload product image"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1">Product Category</label>
          <input
            type="text"
            placeholder="product category"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1">Add Link to Product</label>
          <input
            type="email"
            placeholder="upload product image"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
