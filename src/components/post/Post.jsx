import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ id, img, title, category, date, description }) {
  return (
    <div className="post">
      <Link to={`/post/${id}`} className="postLink">
        <img className="postImg" src={img} alt="" />
      </Link>
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">
            <Link className="link" to="/posts?category=Drinks">
              {category}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
