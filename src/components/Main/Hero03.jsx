import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import shipImage from "./../../assets/ship.png"
import planeImage from "./../../assets/plan1.png"
import truckImage from "./../../assets/truck.png"

function Hero03() {
  const truckRef = useRef(null);
  const planeRef = useRef(null);
  const shipRef = useRef(null);

  const [hover, setHover] = useState(false);

  const animateTruck = () => {
    gsap.to(truckRef.current, {
      x: 350,
      y: 350,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        gsap.fromTo(
          truckRef.current,
          { x: -350, y: -350, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const animateShip = () => {
    gsap.to(shipRef.current, {
      x: 350,
      y: 350,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        gsap.fromTo(
          shipRef.current,
          { x: -350, y: -350, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const animatePlane = () => {
    gsap.to(planeRef.current, {
      x: 350,
      y: 350,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        gsap.fromTo(
          planeRef.current,
          { x: -350, y: -350, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          }
        );
      },
    });
  };

  return (
    <div className="Hero03 bg-white pt-[429px] sm:p-12  flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl">We Provide Safe </h1>
        <h1 className="text-3xl sm:text-5xl">And Reliable Cargo Solutions</h1>
      </div>
      <div className="cards flex flex-wrap justify-center gap-8 sm:gap-12">
        <div className="card border-2 border-slate-800 md:w-1/3 w-80 shadow-xl m-8">
          <figure
            // onMouseOver={animateTruck}
            onMouseEnter={animateTruck}
            className="relative overflow-hidden"
          >
            <img
              ref={truckRef}
              src={truckImage}
              alt="truck"
              className="w-[286px] absolute top-0 left-0 z-1 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 1, transition: "opacity 2s" }}
            />
          </figure>
          <div className="card-body text-center p-4">
            <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">Truck!</h2>
            <div className="card-actions justify-center">
              <button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card border-2 border-slate-800 md:w-1/3 w-80 shadow-xl m-8">
          <figure
            onMouseEnter={animateShip}
            // onMouseLeave={animateShip}
            className="relative overflow-hidden"
          >
            <img
              ref={shipRef}
              src={shipImage}
              alt="ship"
              className="w-[286px] absolute top-0 left-0 z-1 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 1, transition: "opacity 2s" }}
            />
          </figure>
          <div className="card-body text-center p-4">
            <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">Ship!</h2>
            <div className="card-actions justify-center">
              <button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card border-2 border-slate-800 md:w-1/3 w-80 shadow-xl m-8">
          <figure
            // onMouseLeave={animatePlane}
            onMouseEnter={animatePlane}
            className="relative overflow-hidden"
          >
            <img
              ref={planeRef}
              src={planeImage}
              alt="plane"
              className="w-[286px] absolute top-0 left-0 z-1 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 1, transition: "opacity 2s" }}
            />
          </figure>
          <div className="card-body text-center p-4">
            <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">Plane!</h2>
            <div className="card-actions justify-center">
              <button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero03;