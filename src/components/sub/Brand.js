import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import { NavLink } from 'react-router-dom';

export default function Brand() {
    const path = process.env.PUBLIC_URL;

    return (
       <>
         
         <Layout name={'Brand'}>
        {/* <div className="Btn">
                <NavLink to='/About'>ABOUT</NavLink>
                <NavLink to='/Brand'>BRAND</NavLink>
        </div> */}
             <h2>We made cosmetics suitable for various skin types using unique ingredients extracted from blue tangerines and barley. The extract was extracted over several stages of safe, fresh and diverse experiments. Stability and certified components that have passed several stages of experimentation. It can protect both your health and skin safely.</h2>
            <div className="inner">
        
             <div className="section">                    
                     <img src={process.env.PUBLIC_URL + '/brand/t3.jpg'} alt="test3" />
                     <img src={process.env.PUBLIC_URL + '/brand/t4.jpg'} alt="test4" />
                     <img src={process.env.PUBLIC_URL + '/brand/t6.jpg'} alt="test6" />  
                <span></span>

             </div>
        
             <div className="section">                
                     <img src={process.env.PUBLIC_URL + '/brand/g5.jpg'} alt="제품1" />
                     <h3>The Wolf Smart Key Components
                         High concentration of natural extract
                         It maximizes efficacy and minimizes skin irritation.
                         It is composed of safe and soft ingredients that care for dead skin cells, pores, and sebum. Extracts are protected by testing.</h3>   
                         <div className='des'>
                                <p>It maximizes efficacy and minimizes skin irritation.<br/>
                                It is composed of safe and soft ingredients that care for dead skin cells, pores, and sebum.</p>                                    
                         </div>           
             </div>
             <div className="section">      
                        <span></span>               
                     <img src={process.env.PUBLIC_URL + '/brand/g3.jpg'} alt="제품3" />
                     <h3>It is composed of safe and soft ingredients that care for dead skin cells, pores, and sebum. Extracts are protected by testing. It's a vegan shampoo made from natural extracts that doesn't block pores and protects scalp health with silicone-free products and prevents dermatitis.</h3>         
                       
             </div>
             <div className="section">                
                     <img src={process.env.PUBLIC_URL + '/brand/g1.jpg'} alt="제품5" />
                     <h3>It is composed of safe and soft ingredients that care for dead skin cells, pores, and sebum. Extracts are protected by testing. It's a vegan shampoo made from natural extracts that doesn't block pores and protects scalp health with silicone-free products and prevents dermatitis.</h3>      
                     <span></span>          
             </div>
             <div className="section">                    
                     <img src={process.env.PUBLIC_URL + '/brand/g8.jpg'} alt="test3" />
                     <img src={process.env.PUBLIC_URL + '/brand/g10.jpg'} alt="test4" />
                     <img src={process.env.PUBLIC_URL + '/brand/g9.jpg'} alt="test6" />  
                     <div className='des'>
                                <p>It maximizes efficacy and minimizes skin irritation.<br/>
                                It is composed of safe and soft ingredients that care for dead skin cells, pores, and sebum.</p>                                    
                         </div>                   
             </div>             
            </div>
         </Layout>
       </>
    );
}