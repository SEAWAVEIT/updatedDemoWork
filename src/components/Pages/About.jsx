import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
  const HeadingEffect = useRef();
  const ParaEffect = useRef();
  const truck1Ref = useRef();
  const truck2Ref = useRef();
  const personRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline()

    tl.from(HeadingEffect.current, {
      opacity: 0,
      duration: 1,
      y: 40,
      delay: 0.4,
      // stagger: 0.4,
    });
    tl.from(ParaEffect.current, {
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
      x: -90,
      y: -50,
      delay: 1.4,
    });
    gsap.from(personRef.current, {
      opacity: 0,
      duration: 1,
      x: -40,
      // y: -50,
      delay: 2,
    });

  });

  return (
    <div className=' h-auto md:p-none p-8 px-auto w-full bg-white text-black  '>
      <div className='md:flex md:flex-col'>
        <div className='section1 flex flex-col md:gap-20 md:flex-row items-center justify-between m-auto md:py-2 py-2'>
          <div ref={HeadingEffect} className='md:text-6xl text-3xl p-4 font-medium GradientText'>
            <h1 className='text-center md:my-2'>Safe reliable</h1>
            <h1 className='text-center '>Logistic Solutions</h1>
          </div>
          <div className=''>
            <img ref={truck1Ref} src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1dde1e45ab1ef4ad094_mini%20track.png" alt="" />
          </div>
        </div>
        <div className='section2 flex flex-col md:gap-20 md:flex-row items-center justify-between m-auto md:py-2 py-2'>
          <div className='flex md:flex-row flex-col'>
            <div className=' flex flex-row md:order-1 order-2'>
              <div ref={personRef} className=' pr-8 pt-6'>
                <img
                  className='md:h-28'
                  src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2f5ea222b9b7f59eacfc7_logi%20man.png" alt="" />
              </div>
              <div ref={truck2Ref}>
                <img
                  className='md:h-96 h-54'
                  src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png"
                  alt=""
                />
              </div>
            </div>
            <div ref={ParaEffect} className='md:order-2 order-1 mb-8 text-center mx-auto md:mb-none'>
              <p className='md:w-96 w-80 text-center text-sm md:text-lg md:font-medium font-light'>Road transportation has a crucial role.
                coordinated transportation in the
                countries of origin destination makes all the difference.</p>
              <button className="relative inline-block text-center my-4 md:my-2 px-4 py-2 font-medium group">
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
    </div>
  )
}

export default About;
