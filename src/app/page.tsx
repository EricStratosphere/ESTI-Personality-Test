"use client";

import { useState } from "react";
import questions from './data/questions'
import QuestionBox from "./components/questionBox";
import PageList from "./components/PageList";
import Link from "next/link";
export default function Home() {
  const [myQuestions, setQuestions] = useState(questions);
  const [pageIndex, setPageIndex] = useState(0);
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
