import React from 'react'
import blogData from '../Data/BlogData'
import BlogCard from './BlogCard';

const FullStackDev = () => {
  const filteredblog = blogData.filter(
    (item) => item.domain === "Full Stack Development",
  );
  return (
    <div className='blog-container'>
      <> 
        {
            filteredblog.map( (item) => {
            return <BlogCard item = {item} key = {item.id}/>
            })
          } 
      </>
    </div>
  )
}

export default FullStackDev