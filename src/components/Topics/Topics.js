import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Topics = () => {
    const { data } = useLoaderData();
    return (
        <div className='mx-8 my-8 md:mx-16 lg:mx-24 md:my-16 lg:my-20'>
            <h1 className='text-4xl font-bold'>contents, justify your understanding.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-4 mt-12'>
                {
                    data.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Topics;