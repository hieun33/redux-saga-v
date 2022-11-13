import { NavLink } from "react-router-dom";
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className="wrap">
                <article>
                    <h1>CONTACT ME</h1>
                    <p>grace3029@gmail.com</p>
                    <p>166, Jungdong-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</p>
                    <p>+82 10 3413 3029</p>     
                </article>                                     
                     
                <article>
                    <h1>COMPANY</h1>
                    <ol>
                        <li><NavLink to='/About'>about</NavLink></li>
                        <li><NavLink to='/member'>join in</NavLink></li>                                
                        <li><NavLink to='/location'>contact</NavLink></li>
                        
                    </ol>
                </article> 

                <article>
                    <h1>PRODUCT</h1>
                    <ol>
                        <li><NavLink to='/gallery'>gallery</NavLink></li>
                        <li><NavLink to='/youtube'>youtube</NavLink></li>
                        <li><NavLink to='/comunity'>comunity</NavLink></li>
                    </ol>
                </article>    
                    
                <article>
                    <h1>FOLLOW US</h1> 
                    <p>The wolf's waiting for you. Have a nice day.</p>
                    <ul>
                        <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li> 
                    </ul>
                </article>        
                                                            
                    
                </div>  
            </div>
            {/* <p>2022 EUNHYE &copy; ALL RIGHT RESERVED</p>  */}
        </footer>
    )
}