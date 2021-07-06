import React from 'react'
import Navbar from "./Navbar"
import "../style/Page1.css"
import "../style/Page2.css"
import setting from "../icons/Setting.png"
import google from "../images/google.png"
import slack from "../images/slack.png"
import github from "../images/github.png"
import postman from "../images/postman.png"
import design from "../images/design.png"
import marketing from "../images/marketing.png"
import developpement from "../images/developpement.png"


export default function Landing() {
    return (
        <div>
            <Navbar/>
            <div className="Page1">
                <div className="page">
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
                <p hidden>h</p>
                <div className="hello">
                    <h6>OK</h6>
                    <h2>Notre valeur</h2>
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
        </div>
    )
}
