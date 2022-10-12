import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, logo, id } = course;
    return (
        <div className='bg-sky-200 rounded-lg'>
            <img className='bg-slate-200 m-4 w-48 rounded-lg fluid' src={logo} alt='course-logo' />
            <div className='flex justify-between mx-6 mb-6 items-center'>
                <h3 className=''>{name}</h3>
                <button className='bg-sky-500 py-2 px-4 rounded-lg text-yellow-50'><Link to={`/home/${id}`}>Quiz</Link></button>
            </div>
        </div>
    );
};

export default Course;