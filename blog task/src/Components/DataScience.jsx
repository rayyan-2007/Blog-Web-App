import React from 'react'
import blogData from '../Data/BlogData'
import BlogCard from './BlogCard'

const DataScience = () => {
  const filteredBlog = blogData.filter((item) => (item.domain === "Data Science"))
  return (
    <div className='blog-container'>
      <>
      {
        filteredBlog.map( (item)=> {
         return <BlogCard key = {item.id}  item = {item}/>
        })
      }
      </>
    </div>
  )
}

export default DataScience