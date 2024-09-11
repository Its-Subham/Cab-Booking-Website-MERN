import { Link, NavLink } from "react-router-dom";
import Navbar from "./NavBar";
import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";



const Header = () => {

    //For toggle menu
    const [menuOpend, setmenuOpend] = useState(false);
    const toggleMenu = () => setmenuOpend(!menuOpend);

    //set background when the window is scroll
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = ()=>{
        setScrollY(window.scrollY);
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[]);

    return (
        <section>
        <header className={`${scrollY >= 200 ? "fixed top-0 left-0 w-full h-[8%] z-10 transition-all duration-300 bg-customBlack backdrop-blur-sm" : "fixed top-0 left-0 w-full h-[8%] z-10 transition-all duration-300 bg-primaryBlue"}`}>
            <div className=" px-4 py-3 max-xs:px-2 flexBetween mt-1">
                {/*name*/}
                <div className="ml-10">
                    <Link className="text-white text-xl font-extrabold">CAB<span className="text-primaryGreen">BOOKING</span></Link>
                </div>
                {/* Navbar Desktop */}
                <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 navbar_font text-white "} />
                {/* Navber Mobile */}
                <Navbar containerStyles={`${menuOpend ? " md:hidden navbar_font flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 text-white bg-customBlack backdrop-blur-sm rounded-3xl shadow-md w-64  transition-all duration-300" : "md:hidden navbar_font flex item-start flex-col gap-y-12 fixed top-20 p-12 text-white bg-customBlack backdrop-blur-sm rounded-3xl shadow-md w-64  transition-all duration-300 -right-[100%] "}`} navBtnClick={toggleMenu} /> {/*passing props called navBtnCick*/}
                {/* Buttons  */}
                <div className="sm:gap-x-2 bold-16 flexBetween">
                    <div>
                        {menuOpend ? (<MdClose className="md:hidden cursor-pointer text-white hover:text-primaryGreen mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full ring-white hover:ring-primaryGreen" onClick={toggleMenu} />) : (<MdMenu className="md:hidden cursor-pointer text-white hover:text-primaryGreen mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full ring-white hover:ring-primaryGreen" onClick={toggleMenu} />)}
                    </div>
                    <div className="mx-5">
                        <NavLink to={"/login"} className={"gap-x-2 navbar_font text-white hover:text-primaryGreen"}>Login</NavLink>
                    </div>
                </div>
            </div>
        </header>
        </section>
    )
}

export default Header