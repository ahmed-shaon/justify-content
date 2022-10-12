import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, logo, id } = course;
    return (
        <div className='bg-sky-200 rounded-lg p-4 md:p-4 lg:p-4'>
            <img className='bg-slate-200 w-full mb-4 md:mb-4 lg:mb-4 md:w-72 lg:w-48 rounded-lg fluid' src={logo} alt='course-logo' />
            <div className='flex justify-between mx-3 md:mx-4 lg:mx-0 mb-3 md:mb-2 lg:mb-2 items-center'>
                <h3 className='text-xl font-bold'>{name}</h3>
                <button className='bg-sky-500 py-2 px-4 rounded-lg text-yellow-50'><Link to={`/home/${id}`}>Quiz</Link></button>
            </div>
        </div>
    );
};

export default Course;