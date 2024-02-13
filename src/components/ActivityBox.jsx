import React from "react";
import "./ActivityBox.css";
import InputBox from "./InputBox";

const ActivityBox = (props) => {
  return (
    <div id="practiceBox_act">
      <span id="title_act">{props.actTitle_p}</span>

      <div
        id="inputBox_act"
        className='pop'
      >
        {props.typeInput_p.split("").map((char, index) => (
          <span key={index} className="text_ref">{char}</span>
        ))}
      </div>

      <InputBox
        value_p={props.input_p}
        handleUserInput_p={props.handleUserInput_p}
      />
    </div>
  );
};

export default ActivityBox;
