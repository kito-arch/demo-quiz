import React from "react";
import { useState } from "react";
import SingleQuestionProps from "../../Interfaces/SingleQuestionInterface";
import SingleQuestion from "../SingleQuestion/singleQuestion";


interface QuestionsProps{
    show: boolean
}

export default function Questions({show}: QuestionsProps){
    const [questions, setQuestions] = useState<SingleQuestionProps[]>(
        [
            {
                question: "How many pets do you have?",
                options: [
                    "A. 1",
                    "B. 2",
                    "C. 3",
                    "D. 4"
                ],
                correct: 1 //index 1, which has value 2
            },
            {
                question: "What is your dog name?",
                options: [
                    "A. Tom",
                    "B. Thomas",
                    "C. Tommy"
                ],
                correct: 0 //index 0, which has value Tome
            }
        ]
    )
    
    return(
        <React.Fragment>
            {
                questions.map((element)=>{
                    return(
                        <SingleQuestion question={element.question} options={element.options} correct={element.correct} show={show}/>
                    )
                })
            }
        </React.Fragment>
    )
}