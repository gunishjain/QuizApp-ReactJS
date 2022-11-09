import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../Helpers/context';
import '../App.css';


export const MainMenu = () =>{

    const {setGameState} = useContext(QuizContext)

    return <div className='Menu'>
        <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
        </div>
}
