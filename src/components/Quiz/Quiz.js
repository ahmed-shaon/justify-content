import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const {data} = useLoaderData();
    const {questions} = data;
    console.log(data)
    return (
        <div className='mx-auto my-20'>
            <p className='text-center my-4 md:my-8 text-2xl font-bold text-sky-900'>Quiz of {data.name}</p>
            {
                questions.map((question, index) => <Question 
                key={question.id} 
                questionObj={question}
                index={index}/>)
            }
        </div>
    );
};

export default Quiz;