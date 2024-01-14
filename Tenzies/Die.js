import React from "react"

export default function Die( {value, hold, held} ) {
    
    function dieFace(num) {
        switch (num) {
            case 1:
                return (
                    <div className="dice first-face">
                        <span className="dot"></span>
                    </div>
                )
            case 2: 
                return (
                    <div className="dice second-face">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                )
            case 3: 
                return (
                    <div className="dice third-face">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                )
            case 4: 
                return (
                    <div className="dice fourth-face">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )
            case 5: 
                return (
                    <div className="dice fifth-face">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )
            case 6: 
                return (
                    <div className="dice fourth-face">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )
            default: 
                break
        } 
    }
    
    return (
        <div className={`dice-item ${held && 'held'}`} onClick={hold}>
            {dieFace(value)}
        </div>
    )
}