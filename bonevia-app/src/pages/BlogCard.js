// src/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-img" />
      <div className="blog-card-content">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
