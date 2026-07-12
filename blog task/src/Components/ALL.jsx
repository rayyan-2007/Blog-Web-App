import React from 'react'
import BlogCard from './BlogCard'
import BlogData from "../Data/BlogData";

const ALL = () => {

  return (
    <>
      <div className="blog-container">
        {BlogData.map((item) => {
          // console.log(item)
          return <BlogCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
  
}
export default ALL