import { createBrowserRouter } from "react-router-dom"
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import { Main } from "../layouts/Main"


export const routerLoader = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main />,
            children: [
                {
                    path:'/',
                    element:<Home />
                },
                {
                    path:'/home',
                    element:<Home />
                },
                {
                    path:'statistics',
                    element:<Statistics />
                },
                {
                    path:'blog',
                    element:<Blog />
                },
                {
                    path:'about',
                    element:<About />
                }
            ]
        }
    ])
    
    return router;
}