import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  { 
    path :'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "User/:UserId",
        element: <User/>
      },
      {
        path: "Github",
        element: <Github/>
      }
    ]


  }
 

])




// Here in above code we have created the routing and pass it to further in below code 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>                {/*Here router is the property used fro routing and that we are executing from the above function */}
  </React.StrictMode>,
)
