// src/pages/BlogPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, image: "https://via.placeholder.com/350x200.png?text=Organic+Skincare", title: "The Benefits of Organic Skincare", excerpt: "Discover the advantages of using organic skincare products for a healthier complexion.", category: "Beauty" },
  { id: 2, image: "https://via.placeholder.com/350x200.png?text=Healthy+Eating", title: "Healthy Eating Habits for Glowing Skin", excerpt: "Learn how your diet can impact your skin's health and achieve a natural glow.", category: "Health" },
  { id: 3, image: "https://via.placeholder.com/350x200.png?text=Stress+Relief", title: "Natural Remedies for Stress Relief", excerpt: "Explore effective natural techniques to manage stress and improve overall well-being.", category: "Health" },
  { id: 4, image: "https://via.placeholder.com/350x200.png?text=Sustainable+Living", title: "The Ultimate Guide to Sustainable Living", excerpt: "Embrace a more sustainable lifestyle with practical tips and advice.", category: "Organic" },
  { id: 5, image: "https://via.placeholder.com/350x200.png?text=Skincare+Tips", title: "Top 5 Natural Skincare Tips", excerpt: "Simple natural skincare tips for everyday life.", category: "Beauty" },
  { id: 6, image: "https://via.placeholder.com/350x200.png?text=Mindfulness", title: "Mindfulness for Stress Relief", excerpt: "How to use mindfulness practices to reduce stress.", category: "Health" },
  { id: 7, image: "https://via.placeholder.com/350x200.png?text=Eco+Living", title: "10 Easy Eco-Friendly Swaps", excerpt: "Switch to these eco-friendly habits today.", category: "Organic" },
  { id: 8, image: "https://via.placeholder.com/350x200.png?text=Superfoods", title: "Superfoods for Glowing Skin", excerpt: "The best foods for healthy skin.", category: "Health" },
];

// BlogCard inside BlogPage
const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="blog-card">
    <img src={post.image} alt={post.title} className="blog-card-img" />
    <div className="blog-card-content">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </div>
  </Link>
);

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4; // how many posts per page
  const categories = ["All", "Health", "Beauty", "Organic"];

  // Filter by search + category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || post.category === filter;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search articles"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page when searching
        }}
        className="blog-search"
      />

      {/* Filters */}
      <div className="blog-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setCurrentPage(1); // reset page when filter changes
            }}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      <div className="blog-grid">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="blog-pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          ›
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
