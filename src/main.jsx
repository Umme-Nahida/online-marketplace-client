import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AddJobs from './pages/AddJobs/AddJobs.jsx';
import Category from './pages/Home/Category/Category.jsx';
import JobDetails from './pages/jobDetails/JobDetails.jsx';
import MyBids from './pages/MyBids/MyBids.jsx';
import MyPost from './pages/MyPostedJobs/MyPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/allJobs')
      },
      {
        path: '/category',
        element: <Category></Category>
      },
      {
        path: '/addJobs',
        element: <AddJobs></AddJobs>
      },
      {
        path: '/myBids',
        element: <MyBids></MyBids>,
      },
      {
        path: '/myPostJobs',
        element: <MyPost></MyPost>,
        loader: ()=> fetch('http://localhost:5000/allJobs')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/jobDetails/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
