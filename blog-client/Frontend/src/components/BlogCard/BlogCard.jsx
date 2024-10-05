import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, content, image ,author}) => {
  return (
    <div className="blog-card">
      {image && <img src={image} alt={title || 'Blog Post'} className="blog-card-image" />}
      <h2 className="blog-card-title">{title || 'Untitled Post'}</h2>
      <p className="blog-card-content">{content || 'No content available.'}</p>
      <p className="blog-card-author">Author: {author || 'Unknown'}</p>
    </div>
  );
};

export default BlogCard;
