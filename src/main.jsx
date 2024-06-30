import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
      element : <App/>,
      children : [
        {
          path:"/",
          element : <Home />
        },
        {
          path:"/about",
          element : <About />
        },
        {
          path:"/product",
          element : <Product />
        },
      ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
