import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { Data } from "./Data";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
    console.log(index)
    console.log(clicked)
  };

  return (
    <ul className="w-[68%]">
      <h1 className="text-white mb-9 w-full text-5xl text-center font-bold">
        Frequently Asked Questions
      </h1>
      {Data.map((data, index) => (
        <AccordionItem
          data={data}
          index={index}
          key={index}
          active={clicked === index}
          toggleItem={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
