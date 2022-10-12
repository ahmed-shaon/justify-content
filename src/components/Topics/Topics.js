import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Topics = () => {
    const { data } = useLoaderData();
    return (
        <div className='mx-24 my-20'>
            <h1 className='text-4xl font-bold'>contents, justify your understanding.</h1>
            <div className='grid grid-cols-4 gap-4 mt-12'>
                {
                    data.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Topics;