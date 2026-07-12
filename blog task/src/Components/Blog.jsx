import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import blogData from '../Data/BlogData';

export const Blog = () => {

    const {id} = useParams();
        console.log(id)
     
   const blogs = blogData.find( (item) => (item.id === Number(id) ))
     
       return (
         <>
           <Header />

           <div className="inner-blog">
             <h1>{blogs.title}</h1>

              <div className='inner'>
               <img className="image" src={blogs.img} alt={blogs.title} />

               <div className='data'>
                 <p>{blogs.domain}</p>
                 <p>June 19, 2026</p>
                 <h6>{blogs.content}</h6>

                 <div className="btnn">
                   <button>Read More</button>
                 
                 </div>
               </div>
             </div>
           </div>
         </>
       );
}


export default Blog