"use client"
import { useState } from "react";
import { QuestionTypes } from "../../../_@types/types";

function QuestionCard({id,answer,q}:QuestionTypes) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 rounded-lg shadow-md  relative">
         <div className="absolute bottom-0 bg-gradient-to-r from-5% via-25% from-dark via-primary to-dark h-[2px] w-full" />
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <span className="bg-[#2f2f2f] text-white font-semibold p-4 rounded-md text-sm border border-border">
           {id<10&&"0"}{id.toString()}
          </span>
          <h3 className="text-lg font-medium">
            {q}
          </h3>
        </div>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm text-subtitle">
         {answer}
        </div>
      )}
    </div>
  );
};

export default QuestionCard
