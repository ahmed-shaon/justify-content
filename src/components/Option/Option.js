import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, question, correctAnswer }) => {
    // console.log(question)
    const [radio, setRadio] = useState();
    const handleChange = (value) => {
        setRadio(value);
        // setRadio(e.target.value)
        console.log(value);
        if (value === correctAnswer) {
            console.log('right')
            toast.success(' Answer is correct!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            console.log('wrong')
            toast.error('Wrong Answer!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        // console.log(radio)
        // e.preventDefault();
    }
    return (
        <div className='p-3 bg-white m-3 rounded-lg drop-shadow-lg'>
            <label htmlFor=""><input className="mr-2"
                type="radio"
                name={question}
                value={option}
                checked={radio === option}
                onChange={() => handleChange(option)}
            />{option}</label>
            <ToastContainer/>
        </div>
    );
};

export default Option;