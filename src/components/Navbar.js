import React from 'react'
import eclipse from "../icons/eclipse.png";
import call from "../icons/Call.png"
import "../style/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1><img src={eclipse}/> <span>DigitalWaves</span></h1>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <ul>
                    <li>
                        <a href="#acceuil">Acceuil</a>
                        <br/>
                        <div className="border"></div>  
                    </li>
                    <li><a href="#notrevaleur">Notre valeur</a></li>
                    <li><a href="#objectifs">Objectifs</a></li>
                    <li><a href="#whydigitalwaves">Pourquoi DigitalWaves ?</a></li>
                    <li><a href="#travail">Notre travaille</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="call"><p><img src={call}/></p> <p>Appelez-nous (+212)654175928</p></div>
        </div>
    )
}
