import React, { useState } from 'react';
import { Card } from '@mui/material';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function AnswerQuestion({asked, result}) {

    const [answers, setAnswers] = useState(false)

    return (
        <Card className="p-5 w-4/5 mb-10" 
        onClick={() => {
            if (answers) {
                setAnswers(false)
            } else {
                setAnswers(true)
            }
        }}>
        <div className={answers?" flex text-brand-color font-semibold  items-center":" flex  items-center"}>
          <div className="basis-5/5"> {asked}</div>  <div className="ml-2">{answers? <AiOutlineMinus />: <AiOutlinePlus/> }</div>
           </div>
            {answers &&
            <div className="mt-5">
               {result}
            </div>
            }
        </Card>
    )
}