// src/BlogPostPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const fullBlogPosts = [
  {
    id: 1,
    title: "The Benefits of Organic Skincare",
    content: "Here is the full, detailed content about organic skincare. Lorem ipsum dolor sit amet...",
    author: "Jane Doe",
    date: "Sept 20, 2025",
  },
  {
    id: 2,
    title: "Healthy Eating Habits for Glowing Skin",
    content: "This post provides in-depth information about how diet affects skin health. Lorem ipsum dolor sit amet...",
    author: "John Smith",
    date: "Sept 18, 2025",
  },
  {
    id: 3,
    title: "Natural Remedies for Stress Relief",
    content: "Explore effective natural techniques to manage stress and improve overall well-being. Lorem ipsum dolor sit amet...",
    author: "Emily White",
    date: "Sept 15, 2025",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Sustainable Living",
    content: "Discover practical steps you can take to live a more sustainable life. Lorem ipsum dolor sit amet...",
    author: "Michael Brown",
    date: "Sept 10, 2025",
  },
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = fullBlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Blog post not found!</div>;
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>
      <h1>{post.title}</h1>
      <p className="blog-meta">
        By {post.author} on {post.date}
      </p>
      <p className="blog-content">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
