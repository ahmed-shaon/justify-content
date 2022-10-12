import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const Question = ({ questionObj, index }) => {

    const { question, options, correctAnswer } = questionObj;
    const showCorrectAnswer = () => {
        toast.info(`The correct ans is 
        "${correctAnswer}"`);
    }

    return (
        <div className=' mx-4 md:mx-6 lg:mx-auto w-full md:w-full lg:w-3/4 bg-sky-200 p-4 rounded-lg mb-4 drop-shadow-lg'>
            <div className='flex justify-between'>
                <p className='font-bold'><span className='text-lg'>{index + 1}</span>. {question}</p>
                <FontAwesomeIcon className='cursor-pointer' icon={faEye} onClick={showCorrectAnswer}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
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