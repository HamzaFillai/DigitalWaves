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
import phonenumber from "../images/phonenumber.png"

export default function Landing() {

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

    const openm = ()=>{
        document.querySelector(".marketing").classList.add("bg-ac");
    }

    const closem = ()=>{
        document.querySelector(".marketing").classList.remove("bg-ac");
    }

    const opend = ()=>{
        document.querySelector(".developpement").classList.add("bg-ac");
    }

    const closed = ()=>{
        document.querySelector(".developpement").classList.remove("bg-ac");
    }

    const openg = ()=>{
        document.querySelector(".design").classList.add("bg-ac");
    }

    const closeg = ()=>{
        document.querySelector(".design").classList.remove("bg-ac");
    }

    return (
        <div>
            
            <Navbar/>
            <div className="Page1">
                <div id="acceuil" className="page">
                    <h1>Boostez votre entreprise au plus haut niveau.</h1>
                    <p>
                    Une agence de marketing num??rique au Maroc sp??cialis??e dans la communication et le marketing num??riques via Internet, qui utilise la technologie pour am??liorer les performances des entreprises.
                    </p>
                    <div className="start">
                        <a href="#contact"><button>Commencez</button></a>
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
                <div className="phonenumber">
                    <p>
                        <img src={phonenumber}/>
                    </p>
                </div>
                <div id="notrevaleur" className="hello">
                    <h2 >Notre valeur</h2>
                    <h1>Nous apportons des id??es de m??tiers en ligne</h1>
                    <div className="metier">
                        <section>
                            <p>
                                <img src={marketing}/>
                            </p>
                            <h3>Marketing digital</h3>
                            {/*<p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>*/}
                            <button onClick={()=>openm()}>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </section>
                        <section>
                            <p>
                                <img src={developpement}/>
                            </p>
                            <h3>Developpement</h3>
                            {/*<p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>*/}
                            <button onClick={()=>opend()}>Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </section>
                        <section>
                            <p>
                                <img src={design}/>
                            </p>
                            <h3>Graphic design</h3>
                            {/*<p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>*/}
                            <button onClick={()=>openg()} id="open">Voir plus <i class="fas fa-arrow-right"></i> </button>
                        </section>
                    </div>
                </div>
                <div className="marketing">
                    <div className="marketing1">
                        <p>
                            <img src={marketing}/>
                        </p>
                        <h3>Marketing digital</h3>
                        <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                        <span onClick={()=>closem()} style={{color: "black", width: "20px"}} class="close">X</span>
                    </div>
                </div>
                <div className="developpement">
                    <div className="developpement1">
                        <p>
                            <img src={developpement}/>
                        </p>
                        <h3>Developpement</h3>
                        <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                        <span onClick={()=>closed()} style={{color: "black", width: "20px"}} class="close">X</span>
                    </div>
                </div>
                <div className="design">
                    <div className="design1">
                        <p>
                            <img src={design}/>
                        </p>
                        <h3>Graphic design</h3>
                        <p>When users interact with your product, it should tell them an amazing story, driving your business forward. I can help you create that story.</p>
                        <span onClick={()=>closeg()} style={{color: "black", width: "20px"}} class="close">X</span>
                    </div>
                </div>
            </div>

            <div id="objectifs" className="Page3">
                <div  className="objective1">
                    <div>
                        <p>Objective</p>
                        <h1>Sp??cifique, Mesurable, Atteignable, R??aliste</h1>
                        <div className="firstpart" id="n2">
                            <div className="number" >
                                <p>02</p>
                            </div>
                            <div className="text">
                                <h3>Cr??ation</h3>
                                <p>Plateformes professionnelles (sites de communication - site web..), le bon contenu pour chaque objectif</p>
                            </div>
                        </div>
                        <div className="firstpart" id="n4">
                            <div className="number" > 
                                <p>04</p>
                            </div>
                            <div className="text">
                                <h3>Analyse</h3>
                                <p>Analyse des r??sultats et des donn??es</p>
                            </div>
                        </div>
                    </div>
                    <div className="number135">
                        <div className="firstpart" id="n1">
                            <div className="number" >
                                <p>01</p>
                            </div>
                            <div className="text">
                                <h3>Strat??gie</h3>
                                <p>Utiliser les ressources de l'entreprise pour atteindre les objectifs soulign??s</p>
                            </div>
                        </div>
                        <div className="firstpart" id="n3">
                            <div className="number" >
                                <p>03</p>
                            </div>
                            <div className="text">
                                <h3>Management</h3>
                                <p>Ex??cution de toutes les parties qui se chevauchent selon la strat??gie  sp??cifi??e</p>
                            </div>
                        </div>
                        <div className="firstpart" id="n5">
                            <div className="number" >
                                <p>05</p>
                            </div>
                            <div className="text">
                                <h3>Optimisation</h3>
                                <p>Am??liorer et ajuster la strat??gie en fonction des r??sultats</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="whydigitalwaves" className="Page4">
                <div className="why"> 
                    <p><img src={eclipse2}/> <span>Pourquoi DigitalWaves ?</span></p>
                    <h1>Nous apportons des id??es de m??tiers en ligne</h1>
                    <p>Nous voulons donner de la valeur??? ?? nos valeurs. Loin d?????tre des paroles en l???air, elles correspondent ?? un vrai engagement envers vous, mais aussi entre nous.Partant du principe qu???il faut toujours ??tre exemplaire dans ce que l???on pr??ne, nous travaillons de la m??me mani??re en interne qu???avec nos clients.Nous voulons donner de la valeur???<br/>
                    ?? nos valeurs. Loin d?????tre des paroles en l???air, elles correspondent ?? un vrai engagement envers vous, mais aussi entre nous.Partant du principe qu???il faut toujours ??tre exemplaire dans ce que l???on pr??ne, nous travaillons de la m??me mani??re en interne qu???avec nos clients.</p>
                </div>
                <div className="groupe2"></div>
            </div>

            <div id="travail" className="Page5">
                <p>Notre travail</p>
                <h1>Les ??tudes de cas sont men??es par notre ??quipe</h1>
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
                <p>T??moignage</p>
                <h1>Qu'est-ce que nos clients disent de nous</h1>
                <div>
                    <div className="clients">
                        <i class="fas fa-quote-left"></i>
                        <p>{/*Livraison ultra rapide, moins de 5min apr??s la commande.<br/>
                        Meilleurs prix de tout le march??, continuez comme ??a vous ??tes les meilleurs.*/}</p>
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
                        <p>{/*Livraison ultra rapide, moins de 5min apr??s la commande.<br/>
                        Meilleurs prix de tout le march??, continuez comme ??a vous ??tes les meilleurs.*/}</p>
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
                        <p>{/*Livraison ultra rapide, moins de 5min apr??s la commande.<br/>
                        Meilleurs prix de tout le march??, continuez comme ??a vous ??tes les meilleurs.*/}</p>
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
                <h1>Pr??t ?? d??velopper votre entreprise <br/> rendez-le sp??cial ?</h1>
                <p>nous vous recommandons de vous abonner ?? notre newsletter, Merci de d??posez <br/> votre email ci-dessous pour recevoir les derni??res nouvelles ?? notre sujet</p>
                <div className="subscribe">
                    <p><img src={message}/> <input type="text" className="no-outline" placeholder="Entrez votre adresse email"/></p>
                    <button>Subscribe</button>
                </div>
            </div>
  
            <div id="contact" className="Page8">
                <h1>Contactez-nous</h1>
                <p>Merci de d??posez votre email ci-dessous pour recevoir les derni??res nouvelles ?? notre sujet</p>
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
                        Une agence de marketing num??rique au Maroc sp??cialis??e dans la communication et<br/> le marketing num??riques via Internet, qui utilise la technologie pour am??liorer les<br/> performances des entreprises.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <a onClick={()=>acceuil()} href="#acceuil">Acceuil</a>
                                <br/>
                                <div id="acceu" className=""></div>  
                            </li>
                            <li>
                                <a onClick={()=>notrevaleur()} href="#notrevaleur">Notre valeur</a>
                                <br/>
                                <div id="notrevale" className=""></div>
                            </li>
                            <li>
                                <a onClick={()=>objectifs()} href="#objectifs">Objectifs</a>
                                <br/>
                                <div id="objecti" className=""></div>
                            </li>
                            <li>
                                <a onClick={()=>whydigitalwaves()} href="#whydigitalwaves">Pourquoi DigitalWaves ?</a>
                                <br/>
                                <div id="whydigitalwav" className=""></div>
                            </li>
                            <li>
                                <a onClick={()=>travail()} href="#travail">Notre travaille</a>
                                <br/>
                                <div id="trava" className=""></div>
                            </li>
                            <li>
                                <a onClick={()=>contact()} href="#contact">Contact</a>
                                <br/>
                                <div id="conta" className=""></div>
                            </li>
                        </ul>
                    </nav>
                    <p>
                        <i class="fab fa-facebook-f"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i><i class="far fa-envelope"></i>
                    </p>
                </footer>
            </div>   
        </div>
    )
}