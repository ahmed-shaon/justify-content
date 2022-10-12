import Option from '../Option/Option';

const Question = ({ questionObj, index }) => {
    
    const { question, options, correctAnswer } = questionObj;
   
    return (
        <div className='border-2 mx-auto w-3/4 bg-sky-200 p-3 rounded-lg mb-4 drop-shadow-lg'>
            <p>{index+1}. {question}</p>
            <div className='grid grid-cols-2'>
                {
                    options.map((option, index) => <Option 
                    key={index} 
                    option={option} 
                    question={question}
                    correctAnswer={correctAnswer}
                    />)
                }
            </div>
        </div>
    );
};

export default Question;