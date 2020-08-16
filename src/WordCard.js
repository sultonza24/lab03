import React, { useState } from 'react';
import _, { attempt, isInteger, toInteger } from 'lodash';

import CharacterCard from './CharacterCard';

var correct = 0;
var row = 0;
var ans = "";

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    ans = props.value

    const activationHandler = c => {
        console.log('${c} has been activated')
    
        let guess = state.guess + c
        setState({...state, guess})
 
        if(guess.length == state.word.length){
            if(guess == state.word){
                correct++;
                console.log('WOW ! You Correct' + 'Your point is '+ correct)
                alert('WOW ! You Correct' + 'Your point is '+ correct)
                setState({...state, completed: true})
                if(correct == 3) {
                    console.log("YOU WIN!")
                    alertToWin();
                    window.location.reload(false)
                }
            }else{
                console.log('reset, next attempt')
                alert("TRY AGAIN")
                row++;
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        } 
    } 
    
    return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
            <br></br>
            &nbsp;&nbsp;&nbsp;หากคุณตอบเกิน 3 ครั้งแล้วคุณยังไม่สามารถหาคำตอบได้สามารถกดปุ่ม <button onClick={() => displayAnswer(ans, row)}>Answer</button>  เพื่อดูเฉลยได้<br></br><br></br>
        </div>
        
    )
}

function alertToWin() {
    var ale = Math.floor(Math.random() * 3);
    if(ale == 0) {
        alert("YOU WIN!");
    }
    else if(ale == 1) {
        alert("YOUR ENGLISH SO GOOD!");
    }
    else{
        alert("YOU SO WISE!");
    }
}

function displayAnswer(word, rows) {
    if(rows >= 3){
      document.getElementById("demo").innerText = "Answer this question : "+ word;
    }
}