import React from 'react'
import Navbar from "./Navbar"
import "../style/Page1.css"
import woman from "../images/woman.png"

export default function Landing() {
    return (
        <div>
            <Navbar/>
            <div className="page1">
                <h1>Boostez votre entreprise au plus haut niveau.</h1>
                <p>
                Une agence de marketing numérique au Maroc spécialisée dans la communication et le marketing numériques via Internet, qui utilise la technologie pour améliorer les performances des entreprises.
                </p>
                <div className="start">
                    <button>Commencez</button>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
