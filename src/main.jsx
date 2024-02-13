import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GamesTile from "./pages/Home.jsx";
import PracticePage from "./pages/PracticePage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {path: '/',
  element: <GamesTile/>,
  errorElement: <PageNotFound/>
  },
  {
    path:'/practice-page',
    element: <PracticePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
