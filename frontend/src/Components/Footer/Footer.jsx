import React from "react";
import './Footer.css'

import instagram_icon from '../Assets/instagram_icon.png'

import facebook from '../Assets/facebook.png'
import Twitter from '../Assets/Twitter.png'
import youtube from '../Assets/youtube.png'
import linkedin from '../Assets/LinkedIn.png'
const Footer =() =>{
    return (
        <div className="footer">
            <div className="footerup">
                <div className="aboutus">
                    <h4>About us</h4>
                    <ul>
                        <li>Businesses credit</li>
                        <li>Partners</li>
                        <li>insights</li>
                    </ul>

                </div>
                <div className="solutions">
                    <h4>Solutions</h4>
                    <ul>
                        <li>E-Challan</li>
                        <li>RC Details</li>
                        <li>API</li>
                    </ul>


                </div>
                <div className="Getintouch">
                    <h4>Get in touch</h4>
                    <ul>
                        <li>Vahanfin Solutions Pvt Ltd<br/>
                            Nabibux House, 3rd Floor,<br/>
                            Vakola Bridge Road, Santacruz (E),<br/>
                            Mumbai 400 055, Maharashta,INDIA</li>
                    </ul>
                </div>
                <div className="logos">
                    <img src={instagram_icon} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={linkedin} alt=""/>
                    <img src={Twitter} alt=""/>
                    <img src={youtube} alt=""/>
                </div>

            </div>
            
            <div className="footerdown">

            </div>

        </div>
    )
}

export default Footer
