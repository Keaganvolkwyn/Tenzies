import React from "react"
import { useState, useEffect } from "react"

export default function Timer( {tenzies, running, checkGame, time, setTime} ) {

    useEffect(() => {
        let intervalId
        if(running) {
            intervalId = setInterval(() => setTime(time + 1), 10)
        } else if (checkGame) {
            setTime(0)
        }
        
        return () => clearInterval(intervalId)
    }, [running, time, checkGame])
    
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const milliseconds = time % 100
    
    const currentTime = `
        ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, "0")}
    `
    
    function getBestTime() {
        return time
    }

    return (
        <>
            <p>Time: {currentTime}</p>
        </>       
    )
}