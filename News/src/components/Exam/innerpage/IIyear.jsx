import React from 'react'
import ExamCard from '../ExamCard'


function IIyear() {
  return (
    <div className="grid justify-center w-full grid-cols-1 px-5 bg-transparent gap-x-10 md:gap-x-8 md:px-10">
      <ExamCard Label="ST" Path="/1year" className="justify-center"></ExamCard>
      <ExamCard Label="PUT" Path="/1year" className="justify-center"></ExamCard>
      <ExamCard Label="UT" Path="/1year" className="justify-center"></ExamCard>
      
    </div>
  )
}

export default IIyear
