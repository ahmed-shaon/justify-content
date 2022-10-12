import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='mt-12 text-center '>
            <h1 className='text-4xl font-bold mb-4'>Data visualization of quiz of all courses</h1>
            <p>With the help of chart here we are visualized the data of quizes.<br />It will help the participent to keep the track.</p>
            <div className='mt-20 flex justify-center'>                
                <ResponsiveContainer width="90%" height={300}>
                    <AreaChart data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                        <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
//#8884d8

export default Statistics;