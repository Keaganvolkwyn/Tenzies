import React from "react"
import Timer from "./Timer.js"
import { useEffect } from "react"

export default function Highscore( { tenzies, rolls, time } ) {
    const highScore = JSON.parse(window.localStorage.getItem('Best time'))
    
    useEffect(() => {
        if(tenzies) {            
            if(highScore === null) {
                return window.localStorage.setItem("Best time", JSON.stringify(bestTime))
            } else if(time <= highScore.time) {
                return window.localStorage.setItem("Best time", JSON.stringify(bestTime))
            } else {
                return
            }
        }
    }, [tenzies])
    
    const bestTime = {
        rolls: rolls,
        time: time
    }
    
    function getScore() {
        if(highScore != null) {
            return `${Math.floor((highScore.time % 360000) / 6000).toString().padStart(2, '0')}:${Math.floor((highScore.time % 6000) / 100).toString().padStart(2, '0')}:${(highScore.time % 100).toString().padStart(2, "0")} in ${highScore.rolls} rolls`
        } else {
            return `play a game to set the high score`
        }
    }
    
    return(
        <>
            <p>Best score: {getScore()}</p>
        </>
    )
}