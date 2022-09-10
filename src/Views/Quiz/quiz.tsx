import Questions from '../../Components/Questions/questions';

import React, { useState } from "react";
export default function Quiz(){

    const [show, setShow] = useState(false);

    return(
        <div className="form-wrapper">
            <h2>Quiz</h2>
            <Questions show={show}/>
            <button type='button' className='submit-button' onClick={()=>setShow(true)}>Submit</button>
        </div>
    )
}