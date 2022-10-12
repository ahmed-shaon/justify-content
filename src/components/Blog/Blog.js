import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 mx-24 '>
            <h1 className='text-center text-4xl font-bold p-2 rounded-lg'>Welcome to blog</h1>
            <hr className='border-4 border-sky-200 mb-8'/>
            <p className='text-2xl font-semibold'>Todays Contents</p>
            <div className='bg-sky-300 p-4 rounded-lg mt-4 mb-8'>
                <h4 className='text-center text-lg font-medium  bg-white py-2 rounded-2xl'>What is the purpose of react router?</h4>
                <h5 className='mt-3 mb-1 font-bold'>React Router</h5>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /> <br /> 
                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                <h5 className='mt-3 mb-1 font-bold'>Need of React Router</h5>
                <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <div className='bg-sky-300 p-4 rounded-lg'>
                <h4 className='text-center text-lg font-medium  bg-white py-2 rounded-2xl'>How does context API works?</h4>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
            </div>
            <div className='bg-sky-300 p-4 rounded-lg my-8'>
                <h4 className='text-center text-lg font-medium  bg-white py-2 rounded-2xl'>How does context API works?</h4>
                <h5 className='font-bold text-lg my-2'>useRef</h5>
                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br /><br />
                A common use case is to access a child imperatively: <br /><br />
                Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br /><br />
                You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>

        </div>
    );
};

export default Blog;