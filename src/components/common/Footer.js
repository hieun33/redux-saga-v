import { NavLink, Link } from "react-router-dom";
import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className="wrap">
                <img src={process.env.PUBLIC_URL+'/img/logo_f.jpg'} alt="푸터용로고회색" />

                        <article>
                            <h1>Company</h1>
                            <ul>
                                <li><NavLink to='/About'>about us</NavLink></li>
                                <li><NavLink to='/location'>contact</NavLink></li>
                                <li><a href="#">Search</a></li>
                            </ul>
                        </article>
                        <article>
                            <h1>Account</h1>
                            <ul>
                                <li><a>Login</a></li>
                                <li><NavLink to ='/Member' >Signup</NavLink></li>
                                
                            </ul>
                        </article>
                        <article>
                            <h1>Social</h1>
                            <ul>
                                <li><a href="https://facebook.com">Facebook</a></li>
                                <li><a href="https://github.com/">Github</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                            </ul>
                        </article>                </div>
                
                {/* <p>2022 EUNHYE &copy; ALL RIGHT RESERVED</p> */}
            </div>
        </footer>
    )
}