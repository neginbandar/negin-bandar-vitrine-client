import "./AddProduct.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [categories, setCategories] = useState([]);
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productLink, setProductLink] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const { userId } = useParams();

  const submitProduct = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("product-image", productImage);
    try {
      const response = await axios.post(
        `${backendURL}:${port}/uploads`,
        formData
      );
      console.log("Image uploaded successfully", response.data);
      const { data: posts } = await axios.get(`${backendURL}:${port}/posts`);
      const userPosts = posts.filter((post) => post.user_id === userId);
      console.log(userPosts);
      if (userPosts.length === 0) {
        console.error("No posts found for user:", userId);
        return;
      }

      const postToUpdate = userPosts[userPosts.length - 1];
      const newProduct = {
        product_id: (postToUpdate.products.length + 1).toString(),
        product_name: productName,
        discount_code: discountCode,
        product_category: productCategory,
        product_link: productLink,
        product_picture: `${backendURL}:${port}/${response.data.productImageUrl}`,
      };

      postToUpdate.products.push(newProduct);
      await postNewProduct(postToUpdate);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };
  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };
  const handleProductLinkChange = (e) => {
    setProductLink(e.target.value);
  };

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

  const isFormValid = () => {
    if (
      !productCategory ||
      !productCategory ||
      !productDescription ||
      !productName ||
      !productLink
    ) {
      return false;
    }
    return true;
  };

  const postNewProduct = async (updatedPost) => {
    if (isFormValid()) {
      try {
        const { data } = await axios.put(
          `${backendURL}:${port}/posts`,
          updatedPost,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Product added successfully:", data);
      } catch (error) {
        console.log("Error adding new product");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  //   const postSubmitHandler = async (e) => {
  //     e.preventDefault();

  //     if (isFormValid()) {
  //       try {
  //         const newProduct = {
  //           product_name: productName,
  //           product_description: productDescription,
  //           discount_code: discountCode,
  //           product_category: productCategory,
  //           product_link: productLink,
  //         };
  //         console.log(newPost);
  //         postNewPost(newPost);
  //         console.log("Upload success:", data);
  //       } catch (error) {
  //         console.error("Upload error:", error);
  //       }
  //     } else {
  //       console.error("Form validation failed");
  //     }
  //   };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="add-product__container">
      <form
        method="post"
        encType="multipart/form-data"
        className="post-upload_form"
        onSubmit={submitProduct}
      >
        <div className="mb-3">
          <label htmlFor="Upload">Upload Image</label>
          <input
            type="file"
            className="form-control-file"
            name="product-image"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            className="form-control"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-description">Product Description</label>
          <input
            type="text"
            placeholder="Product Description"
            className="form-control"
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category">Product Category</label>
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
        </div>
        <div className="mb-3">
          <label htmlFor="discount-code">Discount Code:</label>
          <input
            type="text"
            placeholder="Add discount code"
            className="form-control"
            value={discountCode}
            onChange={handleDiscountChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="link">Add Link to Product</label>
          <input
            type="text"
            placeholder="link to product website"
            className="form-control"
            value={productLink}
            onChange={handleProductLinkChange}
          />
        </div>
        <button type="upload" className="button" onClick={submitProduct}>
          Submit Product
        </button>
      </form>
    </div>
  );
}
