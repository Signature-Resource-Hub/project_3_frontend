import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AddServiceForm.css";

import { jwtDecode } from "jwt-decode";
import NavBAr from "../NavBAr";

const AddServices = () => {
  const [formData, setFormData] = useState({
    user_id:"", // Initialize user_id as an empty string
    title: "",
    picture: "",
    phone: "",
    description: "",
    location: "",
    Category: "",
    SubCategory: "",
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [message, setMessage] = useState(null);

  // useEffect to update formData.user_id when localStorage changes
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Get the token from localStorage
  //   const decodedToken = jwtDecode(token); // Decode the token
    setFormData((prevFormData) => ({
      ...prevFormData,
      user_id: userId, // Update user_id with the decoded user ID
    }));
  // }, []); // Empty dependency array to run only once when the component mounts

  // Check if the token exists and is a string
  console.log(userId)
  
}, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "Category") {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/subcategories/byCategoryId`,
          { _id: value }
        );
        setSubCategories(response.data.subcategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setSubCategories([]); // Reset subcategories if fetch fails
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:8000/api/services",
        formData
      );
      console.log(response.data);
      setMessage({ type: "success", text: "Service added successfully" });
      setFormData({
        user_id: formData.user_id, // Preserve other formData fields
        title: "",
        picture: "",
        phone: "",
        description: "",
        location: "",
        Category: "",
        SubCategory: "",
      });
    } catch (error) {
      console.error("Error adding service:", error);
      setMessage({ type: "error", text: "Failed to add service" });
    }
  };

  return (
    <div>
      <NavBAr />
      <br />
      <br />
      <div className="form-container">
        <h2>Add Service</h2>
        <form onSubmit={handleSubmit} className="service-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Picture:</label>
            <input
              type="text"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.Category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Subcategory:</label>
            <select
              name="SubCategory"
              value={formData.SubCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Subcategory</option>
              {subCategories.map((subCategory) => (
                <option key={subCategory._id} value={subCategory._id}>
                  {subCategory.SubCategory}
                </option>
              ))}
            </select>
          </div>
          {message && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
          <button type="submit">Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
