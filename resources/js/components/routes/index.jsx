import About from "../pages/About";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const privateRoutes = [
    {path:'/about', element:<About/>},
    {path:'/', element:<Main/>},
    {path:'/*', element:<Main/>}
]

export const publicRoutes = [
        {path:'/login', element:<Login/>},
        {path:'/registration', element:<Register/>},
        {path:'*', element:<Login/>}
    ]
