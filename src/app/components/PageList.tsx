import { on } from "events"
import questions from "../data/questions"
import type { question } from "../data/questions"
import './styles/pagelist.css'
import Link from "next/link"
interface pageListProps{
    questions : question[][],
    setIndex : (x : number) => void,
    pageIndex : number
}

const onCurrentPageStyle = {
    backgroundColor : "rgb(50, 123, 231, 1)",
}

export default function PageList({questions, setIndex, pageIndex} : pageListProps) {

    const myPageListFunction = (question : question[], index : number) => {
        return(
            <Link href="#top" key={index}>
            <button
            style={index === pageIndex ? onCurrentPageStyle : {}} 
            onClick={() => {setIndex(index)}}>
                {index + 1}
            </button>
            </Link>
        )
    }
    return(
        <>
            <div className="page-list">
                    {questions.map(myPageListFunction)}
               
            </div>
        </>
    )
}