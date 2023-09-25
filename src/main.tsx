import * as React from 'react';
import { ReactDOM} from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/index";
import Home from "./Components/Home/index";


const router = createBrowserRouter([
  {
    path: "/teste/",
    element: <Home />,
    children: [
      {
        path: "/teste/header/",
        element: <Header/>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
