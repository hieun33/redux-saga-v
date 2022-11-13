
import React, { useRef } from "react"
import { NavLink } from 'react-router-dom';



const btn = {
    position : 'absolute',
    top : 120,
    left : 100,
};

const active = { color: 'orange' };


export default function Visual() {


    return (
        <figure id="visual" className='myScroll'>
            <h1>Upgrade Your Skin Care Routine</h1>    
            <p>We introduce the first Face Mask For men. Made to depply recharge your skin, with a sheet<br /> soaked with all active ingredients you need.</p>    
            <ul>
                <li>
                <NavLink to='/join' activeStyle={active}>
                    JOIN US
                </NavLink>
                </li> 
                <li>
                <NavLink to='/brand' activeStyle={active}>
                 VIEW BRAND
                </NavLink>
                </li>
            </ul> 
            <img src={process.env.PUBLIC_URL + '/img/p1.png'} alt="제품사진" />
            
        </figure>
    )
}
// 스크롤 리사이즈는 윈도우 영역

