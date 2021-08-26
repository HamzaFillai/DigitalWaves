import React from 'react'
import eclipse from "../icons/eclipse.png";
import call from "../icons/Call.png"
import "../style/Navbar.css"

export default function Navbar() {

    const acceuil = ()=>{
        document.getElementById("acceui").className="border";
        document.getElementById("notrevaleu").className=""
        document.getElementById("objectif").className=""
        document.getElementById("whydigitalwave").className=""
        document.getElementById("travai").className=""
        document.getElementById("contac").className=""

        document.getElementById("acceu").className="border";
        document.getElementById("notrevale").className=""
        document.getElementById("objecti").className=""
        document.getElementById("whydigitalwav").className=""
        document.getElementById("trava").className=""
        document.getElementById("conta").className=""
    };

    const notrevaleur = ()=>{
        document.getElementById("acceui").className="";
        document.getElementById("notrevaleu").className="border"
        document.getElementById("objectif").className=""
        document.getElementById("whydigitalwave").className=""
        document.getElementById("travai").className=""
        document.getElementById("contac").className=""

        document.getElementById("acceu").className="";
        document.getElementById("notrevale").className="border"
        document.getElementById("objecti").className=""
        document.getElementById("whydigitalwav").className=""
        document.getElementById("trava").className=""
        document.getElementById("conta").className=""
    };

    const objectifs = ()=>{
        document.getElementById("acceui").className="";
        document.getElementById("notrevaleu").className=""
        document.getElementById("objectif").className="border"
        document.getElementById("whydigitalwave").className=""
        document.getElementById("travai").className=""
        document.getElementById("contac").className=""

        document.getElementById("acceu").className="";
        document.getElementById("notrevale").className=""
        document.getElementById("objecti").className="border"
        document.getElementById("whydigitalwav").className=""
        document.getElementById("trava").className=""
        document.getElementById("conta").className=""
    };

    const whydigitalwaves = ()=>{
        document.getElementById("acceui").className="";
        document.getElementById("notrevaleu").className=""
        document.getElementById("objectif").className=""
        document.getElementById("whydigitalwave").className="border"
        document.getElementById("travai").className=""
        document.getElementById("contac").className=""

        document.getElementById("acceu").className="";
        document.getElementById("notrevale").className=""
        document.getElementById("objecti").className=""
        document.getElementById("whydigitalwav").className="border"
        document.getElementById("trava").className=""
        document.getElementById("conta").className=""
    };

    const travail = ()=>{
        document.getElementById("acceui").className="";
        document.getElementById("notrevaleu").className=""
        document.getElementById("objectif").className=""
        document.getElementById("whydigitalwave").className=""
        document.getElementById("travai").className="border"
        document.getElementById("contac").className=""

        document.getElementById("acceu").className="";
        document.getElementById("notrevale").className=""
        document.getElementById("objecti").className=""
        document.getElementById("whydigitalwav").className=""
        document.getElementById("trava").className="border"
        document.getElementById("conta").className=""
    };

    const contact = ()=>{
        document.getElementById("acceui").className="";
        document.getElementById("notrevaleu").className=""
        document.getElementById("objectif").className=""
        document.getElementById("whydigitalwave").className=""
        document.getElementById("travai").className=""
        document.getElementById("contac").className="border"

        document.getElementById("acceu").className="";
        document.getElementById("notrevale").className=""
        document.getElementById("objecti").className=""
        document.getElementById("whydigitalwav").className=""
        document.getElementById("trava").className=""
        document.getElementById("conta").className="border"
    };
    
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
                        <a onClick={()=>acceuil()} href="#acceuil">Acceuil</a>
                        <br/>
                        <div id="acceui" className=""></div>  
                    </li>
                    <li>
                        <a onClick={()=>notrevaleur()} href="#notrevaleur">Notre valeur</a>
                        <br/>
                        <div id="notrevaleu" className=""></div>
                    </li>
                    <li>
                        <a onClick={()=>objectifs()} href="#objectifs">Objectifs</a>
                        <br/>
                        <div id="objectif" className=""></div>
                    </li>
                    <li>
                        <a onClick={()=>whydigitalwaves()} href="#whydigitalwaves">Pourquoi DigitalWaves ?</a>
                        <br/>
                        <div id="whydigitalwave" className=""></div>
                    </li>
                    <li>
                        <a onClick={()=>travail()} href="#travail">Notre travaille</a>
                        <br/>
                        <div id="travai" className=""></div>
                    </li>
                    <li>
                        <a onClick={()=>contact()} href="#contact">Contact</a>
                        <br/>
                        <div id="contac" className=""></div>
                    </li>
                </ul>
            </nav>
            <div className="call"><p><img src={call}/></p> <p>Appelez-nous (+212)654175928</p></div>
        </div>
    )
}
