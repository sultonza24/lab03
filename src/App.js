import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';

var q1 = "";
var q2 = "";
var q3 = "";
var w1 = "";
var w2 = "";
var w3 = "";

var i = Math.floor(Math.random()*3);

if(i == 0) {
    q1 = "ฟุตบอล";
    w1 = "FOOTBALL";
    q2 = "ยิง";
    w2 = "SHOOT";
    q3 = "กองหลัง";
    w3 = "DEFENDE";
}
else if(i == 1) {
    q1 = "กองหน้า";
    w1 = "STRIKER";
    q2 = "ผู้จัดการทีม";
    w2 = "COACH";
    q3 = "ประตู";
    w3 = "GOAL";
}
else if(i == 2){
    q1 = "สนาม";
    w1 = "STADIUM";
    q2 = "สนับสุนน";
    w2 = "SPONSER";
    q3 = "จบ";
    w3 = "END";
}

const word = "Hello";
function App() {
  return (
    <body>
      <div className = 'h01'><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1>WELCOME T0 THE FOOTBALL WORLD</h1><br></br></div>
      <div className = 'h2'><h1>This is a matching game about football.</h1></div>
      <div className = 'h3'><h1>Have fun playing the word match football game.</h1><br></br></div>
      
      &nbsp;&nbsp;&nbsp;1. "{q1}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={w1}/>

      &nbsp;&nbsp;&nbsp;2. "{2}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={w2}/>
  
      &nbsp;&nbsp;&nbsp;3. "{q3}" ภาษาอังกฤษว่าอะไร ? <br></br>
      <WordCard value={w3}/>

    </body>
    );
}

export default App;
