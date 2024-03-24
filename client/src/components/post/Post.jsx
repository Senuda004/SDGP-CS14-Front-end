import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa'; // Import FaPlus icon from react-icons/fa
import "./post.css";

export default function Post({ post }) {
  const PF="http://localhost:5000/uploads/"
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
      {post.img && (<img className="postImg" src ={PF + post.img} alt=""/>)}
      </Link>
        <div className="postInfo">
         
          <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
          <hr />
          
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          <Link to={`/post/${post._id}`} className="link">
          <p className="postDesc"> {post.description} </p>
        </Link>
        </div>
 
    </div>
  );
}




