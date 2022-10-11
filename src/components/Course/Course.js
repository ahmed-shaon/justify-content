import React from 'react';

const Course = ({course}) => {
    const {name, logo}= course;
    return (
        <div className='bg-sky-200 rounded-lg'>
            <img className='bg-slate-200 m-6 w-3/4 rounded-lg' src={logo} alt='course-logo' />
            <h3>{name}</h3>            
        </div>
    );
};

export default Course;