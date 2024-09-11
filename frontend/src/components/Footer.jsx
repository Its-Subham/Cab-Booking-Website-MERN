import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import ScrollTrigger from "react-scroll-trigger";

function Footer() {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <footer className="footer-main bg-black md:h-[90svh] w-full py-[7em] flex flex-col justify-between m-0 text-white">
            <div className="pr-[15px] pl-[15px] mx-[30px]">
                <div className="footer-up grid grid-cols-1 md:grid-cols-4 w-full h-full gap-5">

                    <div className="item ml-3" id="item1">
                        <p className="text-white text-xl font-extrabold mb-[40px] md:mb-2 ">CAB<span className="text-primaryGreen">BOOKING</span></p>
                        <div className="p-3 md:w-[90%] leading-8">
                            <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                        </div>
                    </div>

                    <div className="item ml-3" id="item2">
                        <p className="p ">Information</p>
                        <div className="p-4">
                            <h4 className="pb-[.5rem]">About</h4>
                            <h4 className="pb-[.5rem]">Service</h4>
                            <h4 className="pb-[.5rem]">Term & Conditions</h4>
                            <h4 className="pb-[.5rem]">Best price guarantee</h4>
                            <h4 className="pb-[.5rem]">Privacy & cookies policy</h4>
                        </div>
                    </div>

                    <div className="item ml-3" id="item3">
                        <p className="p">Customer Support</p>
                        <div className="p-4">
                            <h4 className="pb-[.5rem]">FAQ</h4>
                            <h4 className="pb-[.5rem]">Payment Option</h4>
                            <h4 className="pb-[.5rem]">Booking Tips</h4>
                            <h4 className="pb-[.5rem]">How it works</h4>
                            <h4 className="pb-[.5rem]">Contact Us</h4>
                        </div>
                    </div>

                    <div className="item ml-3" id="item4">
                        <p className="p">Have a Question?</p>
                        <div className="p-4 leading-[1.5]">
                            <div className="right flex gap-3  mb-[15px]">
                                <LocationOnIcon sx={{ fontSize: 20 }} />
                                <h4 className="pb-[.5rem]">203 Fake St. Mountain View, San Francisco, California, USA</h4>
                            </div>
                            <div className="right flex gap-3 mb-[15px]">
                                <CallIcon sx={{ fontSize: 20 }} />
                                <h4 className="pb-[.5rem]">+2 392 3929 210</h4>
                            </div>
                            <div className="right flex gap-3 ">
                                <EmailIcon sx={{ fontSize: 20 }} />
                                <h4 className="pb-[.5rem]">info@cabbook.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-logos grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex">
                        <div >
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(true)} >
                                {counterOn && <a className="twitter"><TwitterIcon sx={{ fontSize: 30 }} /></a>}
                            </ScrollTrigger>
                        </div>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(true)} >
                                {counterOn && <a className="facebook"><FacebookIcon sx={{ fontSize: 30 }} /></a>}
                            </ScrollTrigger>
                        </div>
                        <div>
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(true)} >
                                {counterOn && <a className="instagram"><InstagramIcon sx={{ fontSize: 30 }} /></a>}
                            </ScrollTrigger>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2">
                        <h4 className="footer-end md:text-[20px] md:font-medium">Copyright ©2024 All rights reserved | This template is made by CarBooking</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
