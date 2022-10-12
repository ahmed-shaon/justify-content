import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='mt-12 text-center '>
            <h1 className='text-4xl font-bold mb-4'>Data visualization of quiz of all courses</h1>
            <p>With the help of chart here visualized the data of quizes.<br />It will help the participent to keep the track.</p>
            <div className='mt-20 flex justify-center'>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};
//#8884d8

export default Statistics;