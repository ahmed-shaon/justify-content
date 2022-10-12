import { createBrowserRouter } from "react-router-dom"
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { Main } from "../layouts/Main"


export const routerLoader = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main />,
            children: [
                {
                    path:'/',
                    loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
                    element:<Home />
                },
                {
                    path:'/home',
                    loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
                    element:<Home />
                },
                {
                    path:'/topics',
                    loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element:<Topics />
                },
                {
                    path:'statistics',
                    loader:async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element:<Statistics />
                },
                {
                    path:'blog',
                    element:<Blog />
                },
                {
                    path:'about',
                    element:<About />
                },
                {
                    path:'/home/:courseId',
                    loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`),
                    element:<Quiz />
                }
            ]
        }
    ])
    
    return router;
}