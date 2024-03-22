import { Link, useLocation, useNavigate } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SinglePost() {
  const navigate= useNavigate();
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF="http://localhost:5000/uploads/"

  useEffect(()=>{
const getPost= async ()=>{
  const res =  await axios.get("/posts/" + path);
  setPost(res.data)
  };
  getPost()
  
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`);
      navigate("/"); // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.img && (
        <img className="singlePostImg" src={PF +post.img} alt=""/>
)}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">  
          {post.description}
          
        </p>
      </div>
    </div>
  );
}