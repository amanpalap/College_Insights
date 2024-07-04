import { Link } from "react-router-dom";
import { ExamCard } from "../index";

function Exam() {
  return (

    <div className="grid justify-center w-full grid-cols-1 px-5 bg-transparent md:grid-cols-2 gap-x-10 md:gap-x-8 md:px-10">

        <ExamCard Label="1st Year" Path="/1year" className="w-1/2"></ExamCard>

        <ExamCard Label="2st Year" Path="/2year" className="w-1/2"></ExamCard>

        <ExamCard Label="3st Year" Path="/3year" className="w-1/2"></ExamCard>

        <ExamCard Label="4st Year" Path="/4year" className="w-1/2"></ExamCard>

      </div>

  );
}

export default Exam;
