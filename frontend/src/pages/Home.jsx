import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                src="./src/assets/home_video.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
            >
            </video>

            {/* Text Overlay  */}

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className='md:w-[50%] px-5 md:p-0'>
                    <h1 className="h2 text-white">Fast & Easy Way To Booking A Car </h1>
                    <p className='p text-white'>Experience the fast and easy way to book a car, saving you time and hassle. With just a few clicks, find the perfect vehicle for your needs, enjoy competitive rates, and secure your booking instantly. Start your journey with convenience and peace of mind!</p>

                    <div className='flex justify-center mt-5'>
                        <Link
                            to="/cab-book"
                            className='btn_square_primaryBlue hover:bg-primaryGreen transition-colors duration-200 rounded-md p-4 w-40 h-10 flex items-center justify-center'
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Book now.
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home