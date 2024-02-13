import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import "./PracticePage.css";
import ActivityBox from "../components/ActivityBox";

const PracticePage = () => {
  const [typeInput, setTypeInput] = useState(generateRandomInput());
  const [userInput, setUserInput] = useState("");
  const [typedWrong, setTypedWrong] = useState(false);

  function checkInput() {
    let length = userInput.length;

    const text_ref=document.getElementsByClassName('text_ref');
    
    for (let i = length; i < typeInput.length; i++) {
      text_ref[i].classList.remove('wrong','right','current')
    }
    if(length<typeInput.length){
      text_ref[length].classList.add('current')
    }
    if(length>0) text_ref[length-1].classList.remove('current')

    if(length==typeInput.length){
      handleInputReset();
    }
    else if (userInput[length - 1] === typeInput[length - 1]) {
      setTypedWrong(false);
      if(length>0) {
      text_ref[length-1].classList.remove('wrong')
      text_ref[length-1].classList.add('right')
      }

    } else {
      setTypedWrong(true);
      text_ref[length-1].classList.add('wrong')
    }
  }

  function handleUserInput(i) {
    setUserInput(i);
  }

  useEffect(() => {
    checkInput();
  }, [userInput]);


  function generateRandomInput(){
    let chars='abcdefghijklmnopqrstuvwxyz';
    let randomInput='';
    let length=(Math.random()*10)+1
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random() * chars.length);
      randomInput += chars[randomIndex]
    }
    return randomInput;
  }
  function handleInputReset(){
    
    setTypeInput(generateRandomInput())
    setUserInput('')
    setTypedWrong(false)
  }
  
  return (
    <>
      <Header />
      <ActivityBox
        actTitle_p="Practice"
        typeInput_p={typeInput}
        input_p={userInput}
        handleUserInput_p={handleUserInput}
        typedWrong_p={typedWrong}
      />
    </>
  );
};

export default PracticePage;
