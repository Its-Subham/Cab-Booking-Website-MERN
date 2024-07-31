import React,{useState} from "react";
import { BiBorderAll } from "react-icons/bi";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import ScrollTrigger from "react-scroll-trigger";

function Footer() {

    const [counterOn,setCounterOn] = useState(false)

    return (
        <div className="footer-main">
            <div className="footer-up"     >
            
            <div className="item" id="item1">
                <p className="carbook">
                    <p className="car">CAR</p>
                    <p className="book">BOOK</p>
                </p>
                <h4>Far far away, behind the word</h4>
                <h4>mountains, far from the</h4>
                <h4>countries Vokalia and</h4>
                <h4>Consonantia, there live the</h4>
                <h4>blind texts.</h4>
            </div>

            <div className="item" id="item2">
                <p className="p">Information</p>
                <h4>About</h4>  
                <h4>Service</h4> 
                <h4>Term & Conditions</h4> 
                <h4>Best price guarantee</h4> 
                <h4>Privacy & cookies policy</h4>
            </div>

            <div className="item" id="item3">
            <p className="p">Customer Support</p>
                <h4>FAQ</h4>  
                <h4>Payment Option</h4>
                <h4>Booking Tips</h4>  
                <h4>How it works</h4> 
                <h4>Contact Us</h4>
            </div>

            <div className="item" id="item4">
                <p className="p">Have a Question?</p>
                <div className="right">
                    <a className="location"><LocationOnIcon  sx={{ fontSize: 20 }} /></a>
                    <h4>203 Fake St. Mountain View, San Francisco, California, USA</h4>
                </div>
                <div className="right">
                    <a className="call"><CallIcon  sx={{ fontSize: 20 }} /></a>
                    <h4>+2 392 3929 210</h4>
                </div>
                <div className="right">
                    <a className="email"><EmailIcon  sx={{ fontSize: 20 }} /></a>
                    <h4>info@carbook.com</h4>
                </div>
            </div>
        </div>
        <div className="footer-logos">
            <div >
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(true)} >
                    {counterOn && <a className="twitter"><TwitterIcon  sx={{ fontSize: 30 }} /></a>}
                </ScrollTrigger>
            </div>
            <div>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(true)} >
                    {counterOn && <a className="facebook"><FacebookIcon  sx={{ fontSize: 30 }} /></a>}
                </ScrollTrigger>
            </div>
            <div>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(true)} >
                    {counterOn && <a className="instagram"><InstagramIcon  sx={{ fontSize: 30 }} /></a>}
                </ScrollTrigger>
            </div>
        </div>
        <h4 className="footer-end">Copyright ©2024 All rights reserved | This template is made  by CarBooking</h4>
        </div>
    );
}

export default Footer;
