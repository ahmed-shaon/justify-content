import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quiz from '../../quiz.jpg';
import Course from '../Course/Course';

const Home = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='mx-24 my-12 relative'>
            <img className='w-4/5 mx-auto opacity-90 rounded-lg' src={quiz} alt='' />
            <div className='absolute top-32 w-full text-white font-medium text-center'>
                <p className='text-4xl font-bold mb-8'>Quizzzzz!!!!!!</p>
                <p className=' text-slate-100 text-lg'>To evaluate your knowledge take a quiz. Clear your basics enlarge <br /> your learing area. Justify yourself and understand the content.</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-12'>
                {
                    data.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Home;