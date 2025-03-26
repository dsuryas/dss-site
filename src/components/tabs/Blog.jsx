import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blog";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-posts">
      {blogData.map((post) => (
        <div className="blog-card" key={post.id}>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-date">{post.date}</p>
          <p className="blog-excerpt">{post.excerpt}</p>
          <Link to={post.link} className="blog-read-more">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
