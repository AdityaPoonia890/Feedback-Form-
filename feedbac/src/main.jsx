import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Feedback from './Feedback.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/feedback' element={<Feedback/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
