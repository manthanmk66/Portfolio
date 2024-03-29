import React from "react";
import { useState, useRef, useEffect } from "react";
import { keybindings } from "../utils/keybindings";
const Command = () => {
  const [command, setCommand] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [upArrowKeyPressed, setUpArrowKeyPressed] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        inputRef.current.focus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  
  return (
    <div>
      {command.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row mb-0.5">
            <div className="text-teal-500 font-bold ml-10  selection:bg-yellow-900">
              {" "}
              visitor@mk~${" "}
            </div>
            <div className="ml-2 font-mono selection:bg-yellow-900">
              {item.command}
            </div>
          </div>
          <div
            className="font-mono text-left ml-16 mb-3 selection:bg-yellow-900 mr-10"
            id="output-content"
          >
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex flex-row">
        <div className="text-teal-500 font-bold ml-10 selection:bg-yellow-900">
          {" "}
          visitor@mk~${" "}
        </div>
        <input
          className="bg-transparent outline-none border-none font-mono ml-2 text-amber-500 w-2/3"
          type="text"
          ref={inputRef}
          value={currentCommand}
          autoFocus={true}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={(e) => {
            keybindings(
              e,
              setCommand,
              setUpArrowKeyPressed,
              setCurrentCommand,
              currentCommand,
              command,
              upArrowKeyPressed
            );
          }}
        />
      </div>
    </div>
  );
};

export default Command;
