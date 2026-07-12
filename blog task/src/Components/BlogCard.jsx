import React from 'react'

import BlogData from "../Data/BlogData";
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="blog-container"
        onClick={() => navigate(`/blog/${item.id}`)}
      >
        <div className="blogs">
          <img src={item.img} alt={item.title} />
          <p className="title">{item.title}</p>
        </div>

      </div>
      
    </>
  );   
   
}

export default BlogCard
