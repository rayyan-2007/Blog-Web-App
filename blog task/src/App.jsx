import React from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import ALL from './Components/ALL'
import DataScience from './Components/DataScience'
import { RouterProvider } from 'react-router-dom'
import CyberSecurity from './Components/CyberSecurity'
import AI from './Components/AI'
import FullStackDev from './Components/FullStackDev'
import Textemplate from './Components/Template'
import Error from './Components/Error'
import Blog from './Components/Blog'
const App = () => {



const router = createBrowserRouter([

  {
    element:<Textemplate/>,
    children:[
      {
         path:"/",
          element:<ALL/>
        },
        {
          path:"datascience",
          element:<DataScience/>
        },
        {
          path:"cybersecurity",
          element:<CyberSecurity/>
        },
        {
          path:"ai",
          element:<AI/>
        },
        {
          path:"fullstack",
          element:<FullStackDev/>
        },
        {
          path:"*",
          element:<Error/>
        },]
      },
       {
         path:"/blog/:id",
         element:<Blog/>
       }
])

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>

      <footer class="footer">
        
        <p>© 2026 EduGrow | Learn • Build • Grow</p>

        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

      </footer>
    </>
  );
}

export default App
