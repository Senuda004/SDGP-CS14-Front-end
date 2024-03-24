
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SinglePost() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/uploads/";
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [uid, setUid] = useState(""); // Add state to store uid

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.description);
        setUid(res.data.uid); // Set uid from post data
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, { data: { uid } }); // Pass uid in the request body
      navigate("/"); // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedPost = {
        title: title,
        description: description,
        uid: uid, 
      };
      await axios.patch(`/posts/${path}`, updatedPost);
      setUpdateMode(false); // Exit update mode after successful update
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.img && <img className="singlePostImg" src={PF + post.img} alt="" />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Admin
              </Link>
            </b>
          </span>
          <div className="date">
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
        </div>

        {updateMode ? (
          <textarea className="singlePostDesc" value={description} onChange={(e) => setDesc(e.target.value)} />
        ) : (
          <p className="singlePostDesc"> {post.description}</p>
        )}
        {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
      </div>
    </div>
  );
}
