import { useState } from "react";


const Option = ({ option, question, correctAnswer }) => {
    const [value, setValue] = useState()
    const handleOnchange = () => {
        setValue(value)
    }
    console.log(value)
    return (
        <div className='p-3 bg-white m-3 rounded-lg drop-shadow-lg'>
            <label><input className='mr-2' value={option} checked={value === option} onChange={handleOnchange} type="radio"  name={question}/>{option}</label>
        </div>
    );
};

export default Option;