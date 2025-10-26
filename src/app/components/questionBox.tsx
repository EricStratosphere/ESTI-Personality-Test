import './styles/question-box.css'
import type {question}  from '../data/questions'
import {useEffect, useState} from 'react';


interface questionBoxProp{
    questionProp : question[][],
    rowIndex : number, 
    columnIndex : number,
    setQuestion : (x : question[][]) => void
}

export default function QuestionBox({questionProp, rowIndex, columnIndex, setQuestion} : questionBoxProp){
    const setScore = (score : number) => {
        const newQuestions : question[][] = JSON.parse(JSON.stringify(questionProp));
        newQuestions[rowIndex][columnIndex].score = score;
        setQuestion(newQuestions);
        // console.log("questions set!");
    } 

    const agreeStyle = {
        backgroundColor : "rgb(121, 255, 143)",
    }

    const neutralStyle ={
        backgroundColor : "rgba(146, 146, 146, 1)",
    }

    const disagreeStyle ={
        backgroundColor : "rgba(255, 151, 91, 1)"
    }

    return(
    <>
        <div className={"question-box"}>
            
            {questionProp[rowIndex][columnIndex].question}
            <div className='buttons-container'>
                <h3>
                    Disagree
                </h3>
                <button className='question-button' onClick={() => {
                    // console.log("Button 1 clicked!")
                    setScore(1);
                    }} style={questionProp[rowIndex][columnIndex].score == 1 ? disagreeStyle : {}}>
                </button>

                <button className='question-button' onClick={() => {
                    // console.log("Button 2 clicked!")
                    setScore(2);
                    }} style={questionProp[rowIndex][columnIndex].score == 2 ? disagreeStyle : {}}>
                </button>

                <button className='question-button' onClick={() => {
                    // console.log("Button 3 clicked!")
                    setScore(3);
                    }} style={questionProp[rowIndex][columnIndex].score == 3 ? neutralStyle : {}}>
                </button>

                <button className='question-button' onClick={() => {
                    // console.log("Button 4 clicked!")
                    setScore(4);
                    }} style={questionProp[rowIndex][columnIndex].score == 4 ? agreeStyle : {}}>
                </button>

                <button className='question-button' onClick={() => {
                    // console.log("Button 5 clicked!")
                    setScore(5);
                    }} style={questionProp[rowIndex][columnIndex].score == 5 ? agreeStyle : {}}>
                </button>
                <h3>
                    Agree
                </h3>
            </div>
        </div>
    </>)
}