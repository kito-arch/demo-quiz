import React, { ChangeEvent } from "react";
import { useState } from "react";
import SingleQuestionProps from "../../Interfaces/SingleQuestionInterface";

interface ThisSingleQuestionProps extends SingleQuestionProps{
    show: boolean
}


export default function SingleQuestion({question, options, correct, show} : ThisSingleQuestionProps){
    
    const [selected, setSelected] = useState<any>();

    return (
        <div className="box">
            <h4>{question}</h4>
            <div className="divider div-transparent div-dot"></div>
            <div className="options-wrapper">
                {options.map((element, index)=>{
                    return(
                        <div className="option">
                            <input type="radio" name={question as string} value={index} onChange={(event: ChangeEvent<HTMLInputElement>)=>{setSelected(parseInt(event.target.value))}}/>
                            <label>{element}</label>
                        </div>
                    )
                })}
            
            </div>
            {
                show && (
                    (correct == selected? 
                        (
                            <div className="correct-wrapper">
                                <h3 style={{color:'green'}}>True</h3>
                            </div>
                        )
                        :
                        (
                            <div className="correct-wrapper">
                                <h3 style={{color:'red'}}>False, Correct answer is {options[correct ?? 0]}</h3>
                            </div>
                        )
                    )
                )
            }
        </div>
    )
}