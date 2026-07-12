import React from 'react'
import BlogData from "../Data/BlogData";
import BlogCard from './BlogCard';
const AI = () => {
    
      const filteredBlog = BlogData.filter((item) => item.domain === "AI");
    
  return (
   
      <>
     <div className='blog-container'>
      {
        filteredBlog.map((item) => {
          //console.log(item)
        return <BlogCard key={item.id} item={item} />;
        })
      }
      </div>
       </>
    )
  }
    
export default AI