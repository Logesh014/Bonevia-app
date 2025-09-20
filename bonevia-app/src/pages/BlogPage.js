// src/pages/BlogPage.js

import React from 'react';

// Placeholder data for blog posts
const blogPosts = [
  {
    image: 'https://via.placeholder.com/350x200.png?text=Organic+Skincare',
    title: 'The Benefits of Organic Skincare',
    excerpt: 'Discover the advantages of using organic skincare products for a healthier complexion.'
  },
  {
    image: 'https://via.placeholder.com/350x200.png?text=Healthy+Eating',
    title: 'Healthy Eating Habits for Glowing Skin',
    excerpt: 'Learn how your diet can impact your skin\'s health and achieve a natural glow.'
  },
  {
    image: 'https://via.placeholder.com/350x200.png?text=Stress+Relief',
    title: 'Natural Remedies for Stress Relief',
    excerpt: 'Explore effective natural techniques to manage stress and improve overall well-being.'
  },
  {
    image: 'https://via.placeholder.com/350x200.png?text=Sustainable+Living',
    title: 'The Ultimate Guide to Sustainable Living',
    excerpt: 'Embrace a more sustainable lifestyle with practical tips and advice.'
  }
];

// A simple component for each blog card, styled directly for simplicity
const BlogCard = ({ post }) => {
  const cardStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    overflow: 'hidden'
  };
  const imgStyle = {
    width: '100%',
    height: 'auto'
  };
  const contentStyle = {
    padding: '20px'
  };

  return (
    <div style={cardStyle}>
      <img src={post.image} alt={post.title} style={imgStyle} />
      <div style={contentStyle}>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Blog</h1>
      <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;