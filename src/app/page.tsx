"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { solveIE } from "./data/introversion-vs-extroversion";
import { solveJP } from "./data/judging-vs-perceiving";
import { solveSN } from "./data/sensing-vs-intuition";
import { solveTF } from "./data/thinking-vs-feeling";
import questions from './data/questions'
import QuestionBox from "./components/questionBox";
import PageList from "./components/PageList";
import Link from "next/link";
import { Http2ServerRequest } from "http2";
export default function Home() {
  const [myQuestions, setQuestions] = useState(questions);
  const [pageIndex, setPageIndex] = useState(0);
  const score = myQuestions[0][0].score;

  return (
  <>
    <div className="question-div">
      {
        myQuestions[pageIndex].map((question, columnIndex) => {
          return(
            <div key={columnIndex.toString()} style={{
              width : "auto",
              height : "auto"
            }}>
              <QuestionBox questionProp={myQuestions} rowIndex={pageIndex} columnIndex={columnIndex} setQuestion={setQuestions}/>
            </div>
          )
        })
      }

      <PageList questions={myQuestions} setIndex={setPageIndex} pageIndex={pageIndex}></PageList>
      {pageIndex === myQuestions.length - 1 ? 
      
      <Link href={{
        pathname : "./verdict/",
        query : {
          myQuestions : JSON.stringify(myQuestions),
        },
      }}>
        <button>Verdict</button>
      </Link>

      :

      null 
      
      }
    </div> 

    

      
  </>
  );
}
