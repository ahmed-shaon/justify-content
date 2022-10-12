import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const {data} = useLoaderData();
    const {questions} = data;
    return (
        <div className='mx-auto my-20 border-2'>
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