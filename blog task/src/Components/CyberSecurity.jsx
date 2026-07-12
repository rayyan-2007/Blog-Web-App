import React from 'react'
import blogData from '../Data/BlogData'
import BlogCard from './BlogCard';

const CyberSecurity = () => {

   const filteredBlog = blogData.filter(
     (item) => item.domain === "Cyber Security"
   );

  return (
    <div className='blog-container'>
      {filteredBlog.map((item) => {
        return <BlogCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default CyberSecurity