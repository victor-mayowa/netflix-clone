import React, { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { VscRemove } from "react-icons/vsc";

const AccordionItem = ({ data, index, active, toggleItem}) => {

  const { question, answer1, answer2 } = data;

  const contentElement = useRef()


  return (
    <li className="text-white mb-[8px]">
      <button
        onClick={toggleItem}
        className={`flex py-5 px-5  w-full justify-between items-center text-[26px] mb-[1px] ${active ? "bg-[#3a3939]" : "bg-[#303030]"}`}
      >
        {question} <span>{active ? <VscRemove /> : <IoMdAdd />}</span>
      </button>

      <div ref={contentElement}  className={`px-5 overflow-hidden  ${active ? `bg-[#3a3939] ${contentElement.current.scrollHeight}` : "bg-[#303030] h-0"}`}>
        <div className="py-6 text-[26px]">{answer1}</div>
        <div className="py-6 text-[26px]">{answer2}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
