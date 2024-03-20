import "./write.css";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import { Context } from "../../context/Context";
import React, { useState, useContext } from 'react';

export default function Write() {
  const [title, setTitle] = useState(""); // State to hold the post title
  const [desc, setDesc] = useState(""); // State to hold the post description
  const [file, setFile] = useState(null); // State to hold the selected image file
  const { user } = useContext(Context); // Access user context if needed

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
    };

    // If a file is selected, prepare form data for file upload
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        // Upload the file using axios to the specified endpoint ("/upload" assumed here)
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }

    try {
      // Create a new post by sending a POST request to the "/posts" endpoint with post data
      const res = await axios.post("/posts", newPost);
      // Redirect to the newly created post page
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="write">
      {/* Display the selected image */}
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* Button to select image */}
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          {/* Hidden file input to select image */}
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          {/* Input field for title */}
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          {/* Textarea for post description */}
          <textarea
            className="writeInput writeText"
            placeholder="Description here..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        {/* Button to submit the form */}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
