import React from 'react'
import Navbar from "./Navbar"
import "../style/Page1.css"
import "../style/Page2.css"
import "../style/Page3.css"
import "../style/Page4.css"
import setting from "../icons/Setting.png"
import google from "../images/google.png"
import slack from "../images/slack.png"
import github from "../images/github.png"
import postman from "../images/postman.png"
import design from "../images/design.png"
import marketing from "../images/marketing.png"
import developpement from "../images/developpement.png"
import eclipse2 from "../icons/eclipse2.png"

export default function Landing() {
    return (
        <div>
            <Navbar/>
            <div style={{scrollBehavior:"smooth"}} className="Page1">
                <div id="acceuil" className="page">
                    <h1>Boostez votre entreprise au plus haut niveau.</h1>
                    <p>
                    Une agence de marketing numérique au Maroc spécialisée dans la communication et le marketing numériques via Internet, qui utilise la technologie pour améliorer les performances des entreprises.
                    </p>
                    <div className="start">
                        <button>Commencez</button>
                        <p><img src = {setting}/> <span>Comment ca marche ?</span></p>
                    </div>
                </div>
                <div className="images"></div>
            </div>

            <div className="social">
                <p >
                    <img src={google}/>
                </p>
                <p>
                    <img src={postman}/>
                </p>
                <p>
                    <img src={slack}/>
                </p>
                <p>
                    <img src={github}/>
                </p>
            </div>

            <div className="Page2">
                <div className="hello">
                    <h6>OK</h6>
                    <h2 id="notrevaleur">Notre valeur</h2>
                    <h1>Nous apportons des idées de métiers en ligne</h1>
                    <div className="metier">
                        <section>
                            <p>
                                <img src={marketing}/>
                            </p>
                            <h3>Marketing digital</h3>
                            <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </section>
                        <section>
                            <p>
                                <img src={developpement}/>
                            </p>
                            <h3>Developpement</h3>
                            <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </section>
                        <section>
                            <p>
                                <img src={design}/>
                            </p>
                            <h3>Graphic design</h3>
                            <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                            <button>Voir plus <i onMouseOver="this.style.color='red'" class="fas fa-arrow-right"></i> </button>
                        </section>
                    </div>
                </div>
            </div>

            <div id="objectifs" className="Page3">
                <div  className="objective1">
                    <div>
                        <p>Objective</p>
                        <h1>Spécifique, Mesurable, Atteignable, Réaliste</h1>
                        <div className="firstpart">
                            <div className="number">
                                <p>02</p>
                            </div>
                            <div className="text">
                                <h3>Création</h3>
                                <p>Plateformes professionnelles (sites de communication - site web..), le bon contenu pour chaque objectif</p>
                            </div>
                        </div>
                        <div className="firstpart">
                            <div className="number">
                                <p>04</p>
                            </div>
                            <div className="text">
                                <h3>Analyse</h3>
                                <p>Analyse des résultats et des données</p>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <div className="firstpart">
                            <div className="number">
                                <p>01</p>
                            </div>
                            <div className="text">
                                <h3>Stratégie</h3>
                                <p>Utiliser les ressources de l'entreprise pour atteindre les objectifs soulignés</p>
                            </div>
                        </div>
                        <div className="firstpart">
                            <div className="number">
                                <p>03</p>
                            </div>
                            <div className="text">
                                <h3>Management</h3>
                                <p>Exécution de toutes les parties qui se chevauchent selon la stratégie  spécifiée</p>
                            </div>
                        </div>
                        <div className="firstpart">
                            <div className="number">
                                <p>05</p>
                            </div>
                            <div className="text">
                                <h3>Optimisation</h3>
                                <p>Améliorer et ajuster la stratégie en fonction des résultats</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="whydigitalwaves" className="Page4">
                <div className="why"> 
                    <p><img src={eclipse2}/> <span>Pourquoi DigitalWaves ?</span></p>
                    <h1>Nous apportons des idées de métiers en ligne</h1>
                    <p>Nous voulons donner de la valeur… à nos valeurs. Loin d’être des paroles en l’air, elles correspondent à un vrai engagement envers vous, mais aussi entre nous.Partant du principe qu’il faut toujours être exemplaire dans ce que l’on prône, nous travaillons de la même manière en interne qu’avec nos clients.Nous voulons donner de la valeur…<br/>
                    à nos valeurs. Loin d’être des paroles en l’air, elles correspondent à un vrai engagement envers vous, mais aussi entre nous.Partant du principe qu’il faut toujours être exemplaire dans ce que l’on prône, nous travaillons de la même manière en interne qu’avec nos clients.</p>
                </div>
                <div className="groupe2"></div>
            </div>
        </div>
    )
}
