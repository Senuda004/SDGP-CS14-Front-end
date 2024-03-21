import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa'; // Import FaPlus icon from react-icons/fa
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.category.map(c => (
            <span className="postCat"> {c.name} </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc"> {post.description} </p>

      {/* Button to add a post */}
      <Link to="/write">
        <button className="addPostButton">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}
