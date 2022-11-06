import Layout from "../common/Layout";
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    const path = process.env.PUBLIC_URL;
    const Members = useSelector((store) => store.memberReducer.members);

    return (
        <Layout name={'About'}>
            <h2> The company was established in 1970. Our company is based in Seoul.
            We have thirty branch offices including five overseas branches. Our company in involved in the cosmetic business We have been in business for over twenty years. ur company employs 1,000 workers and Our annual turnover is 100 billion won. Since the merger with A in february 2021, we have dominated the market share in this field.We have been in business for forty years and were the first listed in the beauty industry.We are based in Seoul, but we have seven branches worldwide.We specialized in manufacturing cosmetics for our subsidiaries.
            </h2>

            {Members.map((data, index) => {

                return (
                    
                    
                        <article key={index}>
                            <div className="inner">
                                <div className="pic">
                                    <img src={`${path}/img/${data.pic}`} alt={data.name} />
                                </div>
                                <div className="int">                            
                                    <h3>{data.name}</h3>
                                    <p>{data.position}</p>
                                    <ul className='icon-list'>
                                    <li><a href="http://facebook.com" target="_blank" ><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    </ul>  
                                    <br />
                                    <span>{data.scr}</span>
                                 </div>
                            </div>                            
                        </article>
                    
                );
            })}

        


        </Layout>
    );
}