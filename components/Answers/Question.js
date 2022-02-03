import React, { useState } from 'react';
import { Card } from '@mui/material';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function AnswerQuestion({asked, result}) {

    const [answers, setAnswers] = useState(false)

    return (
        <Card className="p-10 pt-5 pb-5 w-4/5  mb-10 " 
        onClick={() => {
            if (answers) {
                setAnswers(false)
            } else {
                setAnswers(true)
            }
        }}>
        <div className={answers?" text-left flex w-full text-brand-color font-semibold  items-center":" flex text-left  items-center"}>
          <li className="basis-5/5" style={{flex:1}}><div>{asked}</div></li><div className="ml-2">{answers? <AiOutlineMinus />: <AiOutlinePlus/> }</div>
           </div>
            {answers &&
            <div className="mt-5 text-left">
               {result}
            </div>
            }
        </Card>
    )
}