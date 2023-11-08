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
import UpdatePostJob from './pages/MyPostedJobs/UpdatePostJob.jsx';
import MyRequests from './pages/MyRequest/MyRequests.jsx';
import PrivateRout from './PrivateRoute/PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRout><AddJobs></AddJobs></PrivateRout>
      },
      {
        path: '/myBids',
        element: <PrivateRout><MyBids></MyBids></PrivateRout>,
      },
      {
        path: '/myPostJobs',
        element: <PrivateRout><MyPost></MyPost></PrivateRout>,
        loader: ()=> fetch('http://localhost:5000/allJobs')
      },
      {
        path: '/bidRequests',
        element:<PrivateRout><MyRequests></MyRequests></PrivateRout>
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
        element: <PrivateRout><JobDetails></JobDetails></PrivateRout>,
        loader: ({params})=> fetch(`http://localhost:5000/jobDetails/${params.id}`)
      },
      {
        path: '/updatePostJob/:id',
        element: <UpdatePostJob></UpdatePostJob>,
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
