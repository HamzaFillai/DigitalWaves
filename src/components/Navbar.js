import React from 'react'
import eclipse from "../icons/eclipse.png";
import call from "../icons/Call.png"
import "../style/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1><img src={eclipse}/> <span>DigitalWaves</span></h1>
            <nav>
                <ul>
                    <li>Acceuil</li>
                    <li>Notre valeur</li>
                    <li>Objectifs</li>
                    <li>Pourquoi DigitalWaves ?</li>
                    <li>Notre travaille</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="call"><p><img src={call}/></p> <p>Appelez-nous (+212)654175928</p></div>
        </div>
    )
}
