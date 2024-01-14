import React from "react"
import Die from "./Die.js"
import Timer from "./Timer.js"
import Highscore from "./Highscore.js"
import Confetti from "./Confetti.js"
import { nanoid } from "nanoid"
import { useState, useEffect } from "react"

export default function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [rolls, setRolls] = useState(0)
    const [timer, setTimerRunning] = useState(false)
    const [newGame, setNewGame] = useState(false)
    const [time, setTime] = useState(0)
    
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const sameValue = dice.every(die => die.value === dice[0].value)
        
        if(allHeld && sameValue) {
            setTenzies(true)
            setTimerRunning(false)
        } else {
            setTenzies(false)
        }
    
    }, [dice])
 
    function generateDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid() 
        }
    }
    
    function allNewDice() {
        const diceArr = []
        for (let i = 1; i <= 10; i++) {
            diceArr.push(generateDie())
        }
        return diceArr
    }
    
    function holdDice(id) {
        setNewGame(false)
        setDice(prev => prev.map((die) => {
            if(die.id === id) {
                return {
                    ...die,
                    isHeld: !die.isHeld
                }
            } else {
                return die
            }
        }))
        if(!timer) {
            setTimerRunning(true)
        }
    }
    
    function rollDice() {
        if(!tenzies) {
                setNewGame(false)
                setRolls(prev => prev + 1)
                if(!timer) {
                    setTimerRunning(true)
                }
                setDice(prev => prev.map((die) => {
                if(die.isHeld) {
                    return die
                } else {
                    return generateDie()
                }
            }))
        } else {
            createNewGame()
        }
    }
    
    function createNewGame() {
        setTenzies(false)
        setDice(allNewDice())
        setRolls(0)
        setNewGame(true)
    }

    return (
        <main>
            {tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <Highscore 
                tenzies={tenzies}
                time={time}
                rolls={rolls}
            />
            <div className="dice-container">
                {dice.map(die => <Die 
                value={die.value} 
                key={die.id} 
                hold={() => holdDice(die.id)}
                held={die.isHeld}
                />)}
            </div>
            <button
                className="btn"
                onClick={rollDice}
            >
            {tenzies ? "New Game" : "Roll"}
            </button>
            <p>Number of rolls: {rolls}</p>
            <Timer 
                tenzies={tenzies}
                running={timer}
                checkGame={newGame}
                time={time}
                setTime={setTime}
            />
        </main>
    )
}