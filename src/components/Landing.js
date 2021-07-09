import React from 'react'
import Navbar from "./Navbar"
import "../style/Page1.css"
import "../style/Page2.css"
import "../style/Page3.css"
import "../style/Page4.css"
import "../style/Page5.css"
import "../style/Page6.css"
import "../style/Page7.css"
import "../style/Page8.css"
import "../style/Page9.css"
import setting from "../icons/Setting.png"
import google from "../images/google.png"
import slack from "../images/slack.png"
import github from "../images/github.png"
import postman from "../images/postman.png"
import design from "../images/design.png"
import marketing from "../images/marketing.png"
import developpement from "../images/developpement.png"
import eclipse2 from "../icons/eclipse2.png"
import groupe11 from "../images/groupe11.png"
import groupe12 from "../images/groupe12.png"
import groupe13 from "../images/groupe13.png"
import groupe14 from "../images/groupe14.png"
import personne from "../images/personne.png"
import message from "../icons/message.png"
import bigdigital from "../icons/bigdigital.png"

export default function Landing() {

    return (
        <div>
            {/*}
            <Navbar/>
            <div className="Page1">
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
  {*/} 
            <div className="Page2">
                <div id="notrevaleur" className="hello">
                    <h6>OK</h6>
                    <h2 >Notre valeur</h2>
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
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
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
                    <div className="number135">
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

            <div id="travail" className="Page5">
                <p>Notre travail</p>
                <h1>Les études de cas sont menées par notre équipe</h1>
                <div class="travail">
                    <div>
                        <div className="short">
                            <img src={groupe11}/>
                            <p>A tutorial about creating golden sphere using Figma</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </div>
                        <div className="long">
                            <img src={groupe12}/>
                            <p>A tutorial about creating golden sphere using Figma</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </div>
                    </div>
                    <div className="mod">
                        <div className="long">
                            <img src={groupe13}/>
                            <p>A tutorial about creating golden sphere using Figma</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </div>
                        <div className="short">
                            <img src={groupe14}/>
                            <p>A tutorial about creating golden sphere using Figma</p>
                            <button>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="Page6">
                <p>Témoignage</p>
                <h1>Qu'est-ce que nos clients disent de nous</h1>
                <div>
                    <div className="clients">
                        <i class="fas fa-quote-left"></i>
                        <p><span>Livraison ultra rapide, moins de 5min après la commande.</span><br/>
                        <span>Meilleurs prix de tout le marché, continuez comme ça vous êtes les meilleurs.</span></p>
                        <div className="personne">
                            <img src={personne}/>
                            <p>Mallau**<br/>
                                <span>May 20th 2020</span>
                            </p>
                        </div>
                        <p style={{marginTop : "-60px"}}>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                        </p>
                    </div>
                    <div className="clients">
                        <i class="fas fa-quote-left"></i>
                        <p>Livraison ultra rapide, moins de 5min après la commande.<br/>
                        Meilleurs prix de tout le marché, continuez comme ça vous êtes les meilleurs.</p>
                        <div className="personne">
                            <img src={personne}/>
                            <p>Mallau**<br/>
                                <span>May 20th 2020</span>
                            </p>
                        </div>
                        <p style={{marginTop : "-60px"}}>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                        </p>
                    </div>
                    <div className="clients">
                        <i class="fas fa-quote-left"></i>
                        <p>Livraison ultra rapide, moins de 5min après la commande.<br/>
                        Meilleurs prix de tout le marché, continuez comme ça vous êtes les meilleurs.</p>
                        <div className="personne">
                            <img src={personne}/>
                            <p>Mallau**<br/>
                                <span>May 20th 2020</span>
                            </p>
                        </div>
                        <p style={{marginTop : "-60px"}}>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                        </p>
                    </div>
                </div>
            </div>
 
            <div className="Page7">
                <h2>Notre abonnement</h2>
                <h1>Prêt à développer votre entreprise <br/> rendez-le spécial ?</h1>
                <p>nous vous recommandons de vous abonner à notre newsletter, Merci de déposez <br/> votre email ci-dessous pour recevoir les dernières nouvelles à notre sujet</p>
                <div className="subscribe">
                    <p><img src={message}/> <input type="text" className="no-outline" placeholder="Entrez votre adresse email"/></p>
                    <button>Subscribe</button>
                </div>
            </div>

            <div id="contact" className="Page8">
                <h1>Contactez-nous</h1>
                <p>Merci de déposez votre email ci-dessous pour recevoir les dernières nouvelles à notre sujet</p>
                <p className="required">Fields marked with an asterisk (*) are required.</p>
                <form>
                    <div className="form">
                        <p>
                            <span>First name *</span><br/>
                            <input type="text" required/>
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <span>Last name *</span><br/>
                            <input type="text" required/>
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="form">
                        <p>
                            <span>Email *</span><br/>
                            <input type="email" required/>
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <span>Phone number </span><br/>
                            <input type="text"/>
                        </p>
                    </div>
                    <div className="form2">
                        <p>
                            <span>Nom d'entreprise</span><br/>
                            <input type="text" placeholder="Optionel"/>
                        </p>
                        <p style={{marginTop:"89px"}}>
                            <span>Message</span><br/>
                            <textarea placeholder="Text"/>
                        </p>
                    </div>
                    <p className="submit">
                        <input type="submit" value="Submit"/>
                    </p>
                </form>
            </div>
           
            <div className="Page9">
                <footer>
                    <img src={bigdigital}/>
                    <h1>DigitalWave</h1>
                    <p>
                        Une agence de marketing numérique au Maroc spécialisée dans la communication et<br/> le marketing numériques via Internet, qui utilise la technologie pour améliorer les<br/> performances des entreprises.
                    </p>
                    <nav>
                        <ul >
                            <li>
                                <a href="#acceuil">Acceuil</a>
                                <br/>
                                <div className="border"></div></li>
                            <li><a href="#notrevaleur">Notre valeur</a></li>
                            <li><a href="#objectifs">Objectifs</a></li>
                            <li><a href="#whydigitalwaves">Pourquoi DigitalWaves ?</a></li>
                            <li><a href="#travail">Notre travaille</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <p>
                        <i class="fab fa-facebook-f"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i>
                    </p>
                </footer>
            </div>
            
        </div>
    )
}
