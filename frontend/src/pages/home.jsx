import React from "react";
import './CSS/home.css'
import one from '../Components/Assets/carphoto.png'
import second from '../Components/Assets/2nd.png'
import third from '../Components/Assets/3rd.png'
import whatisechallan from '../Components/Assets/whatisechallan.png'

const Home=()=>{
    return ( 
        <div className="Home">
            <div className="photo">
                
                <div className="photo-left">
                    <h1>CheckTraffic<br/>Challan Status& <br/>
                    Pay Online</h1>
                    <ul>
                        <li>View your traffic eChallans for Free</li>
                        <li>Pay your traffic eChallans with ease</li>
                        <li>No hassle of court visits</li>
                    </ul>
                </div>
                <div className="photo-right">
                    <div>
                        <p>Enter Vehicle number</p>
                    </div>
                   
                    <div>
                        <input placeholder = 'Enter Vehicle number' type = 'String'/>  
                    </div>
                    
                    <div>
                        <button>View Challan</button>
                    </div>
                        
                </div>
                
            </div>
            <div className="process"> 
                <div className="heading">
                    <h2>How to Check& Pay Traffic Challan?</h2>
                </div>  
                <div className="photos">   
                    <div className="one">
                        <img src={one} alt="" />
                        <p><span>1.Search</span> Enter Car Registration number</p>
                    </div>
                    <div className="second" >
                        <img src={second} alt="" />
                        <p><span>2.View</span> View Pending challans</p>
                    </div>
                    <div className="third">
                        <img src={third} alt="" className="third" />
                        <p><span>3.Pay</span>Securely pay with vahanfin </p>
                    </div>
                    
                </div>

            </div>
            <div className="echallan">
                <img src ={whatisechallan} alt=""/>
                <div>
                    <h2>What is a Traffic eChallan?</h2>
                    <p>
                        A traffic eChallan is a digital traffic violation challan that is issued by the traffic police, traffic cameras or transport authorities in India.  As opposed to offline methods of traffic eChallan payment, online payment is convenient, time-saving, and can be done using multiple payment methods including NetBanking, UPI, Credit Card, Debit Card, or a digital wallet. It is also more transparent and gives you an electronic record of the payment you have made.
                    </p>
                </div>
                
            </div>
           
        </div>


    )
}

export default Home