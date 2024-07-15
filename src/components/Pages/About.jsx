import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
    const EntirePageEffect = useRef();
    const truck1Ref = useRef();
    const truck2Ref = useRef();

    useGSAP(() => {
        gsap.from(EntirePageEffect.current.children, {
            opacity: 0,
            duration: 1,
            y: 40,
            delay: 0.4,
            // stagger: 0.4,
        });

        gsap.from(truck1Ref.current, {
            opacity: 0,
            duration: 1,
            x: 40,
            y: -40,
            delay: 1,
        });

        gsap.from(truck2Ref.current, {
            opacity: 0,
            duration: 1,
            x: -120,
            y: -70,
            delay: 1.4,
        });

    });

    return (
        <div ref={EntirePageEffect} className='h-screen md:p-2 p-8 w-full bg-white text-black '>
            <div className='md:flex md:flex-col  '>
                <div className='flex flex-col md:flex-row items-center justify-between m-auto py-6 '>
                    <div className='md:text-6xl text-2xl font-semibold'>
                        <h1 className='text-center my-2'>Safe reliable</h1>
                        <h1 className='text-center '>Logistic Solutions</h1>
                    </div>
                    <div style={{ zIndex: 1 }}> {/* Adjusted z-index */}
                        <img ref={truck1Ref} src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1dde1e45ab1ef4ad094_mini%20track.png" alt="" />
                    </div>
                </div>
                <div className=' md:flex md:flex-row m-auto py-6 '>
                    <div style={{ zIndex: 2 }}> {/* Adjusted z-index */}
                        <img
                            className='md:h-96 h-[250px]'
                            ref={truck2Ref}
                            src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png"
                            alt=""
                        />
                    </div>
                    <div className='z-2 md:z-2'>
                        <p>Road transportation has a crucial role. </p>
                        <p>coordinated transportation in the </p>
                        <p>countries of origin destination makes all the difference.</p>
                        <button className="relative inline-block px-6 py-3 font-medium group">
                            <Link
                                to="#"
                                className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"
                            ></Link>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
                            <span className="relative text-black group-hover:text-black">Button Text</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
