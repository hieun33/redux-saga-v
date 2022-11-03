import Layout from "../common/Layout";
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    const path = process.env.PUBLIC_URL;
    const Members = useSelector((store) => store.memberReducer.members);

    return (
        <Layout name={'About'}>

            {Members.map((data, index) => {

                return (
                    <article key={index}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`${path}/img/${data.pic}`} alt={data.name} />
                            </div>
                            <h3>{data.name}</h3>
                            <p>{data.position}</p>
                            <ul className='icon-list'>
                            <li><a href="http://facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>  
                            <br />
                            {data.scr}
                        </div>
                    </article>
                );
            })}



        </Layout>
    );
}