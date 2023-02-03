import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {

  const divEl = useRef()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event)=>{
      // console.log(divEl.current)
      if(!divEl.current.contains(event.target)){
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click',handler,true)
    return () => {
      document.removeEventListener('click',handler)
    }
  }, [])
  

  const handleClick = () => {
    setIsOpen(!isOpen); // we can use the functional update approach as well
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    console.log(option);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
