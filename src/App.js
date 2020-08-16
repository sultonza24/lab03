import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

var quest01 = "";
var quest02 = "";
var quest03 = "";
var word01 = "";
var word02 = "";
var word03 = "";

var i = Math.floor(Math.random()*3);

if(i == 0) {
    quest01 = "ฟุตบอล";
    word01 = "FOOTBALL";
    quest02 = "ยิง";
    word02 = "SHOOT";
    quest03 = "กองหลัง";
    word03 = "DEFENDE";
}
else if(i == 1) {
    quest01 = "กองหน้า";
    word01 = "STRIKER";
    quest02 = "ผู้จัดการทีม";
    word02 = "COACH";
    quest03 = "ประตู";
    word03 = "GOAL";
}
else if(i == 2){
    quest01 = "สนาม";
    word01 = "STADIUM";
    quest02 = "สนับสุนน";
    word02 = "SPONSER";
    quest03 = "จบ";
    word03 = "END";
}

const word = "Hello";
function App() {
  return (
    <body>
      <div className = 'h01'><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1>WELCOME T0 THE FOOTBALL WORLD</h1><br></br></div>
      <div className = 'h2'><h1>This is a matching game about football.</h1></div>
      <div className = 'h3'><h1>Have fun playing the word match football game.</h1><br></br></div>
      
      &nbsp;&nbsp;&nbsp;1. "{quest01}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={word01}/>

      &nbsp;&nbsp;&nbsp;2. "{quest02}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={word02}/>
  
      &nbsp;&nbsp;&nbsp;3. "{quest03}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={word03}/>

    </body>
    );
}

export default App;
