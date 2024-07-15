import React, { useRef, useState } from "react";
import { gsap } from "gsap";

function Hero03() {
  const shipRef = useRef(null);
  const planeRef = useRef(null);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      x: 350,
      y: 350,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
    });
    setHover(true);
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.65,
      ease: "power3.in",
    });
    setHover(false);
  };

  return (
    <div className= " Hero03 bg-white pt-[429px] sm:p-12 h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl">We Provide Safe </h1>
        <h1 className="text-3xl sm:text-5xl">And Reliable Cargo Solutions</h1>
      </div>
      <div className="cards flex flex-wrap justify-center gap-8 sm:gap-16">
        <div className="card border-2 border-slate-800 w-full sm:w-96 shadow-xl m-8">
          <figure
            onMouseEnter={() => handleMouseEnter(shipRef)}
            onMouseLeave={() => handleMouseLeave(shipRef)}
          >
            <img
              ref={shipRef}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de43f4efb3b9957d7c6_illustration-2.png"
              alt="Ship"
              className="w-[286px] md:p-4 p-8 h-auto roll-out-in"
              style={{ position: "relative" }}
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

        <div className="card border-2 border-slate-800 w-full sm:w-96 shadow-xl m-8">
          <figure
            onMouseEnter={() => handleMouseEnter(planeRef)}
            onMouseLeave={() => handleMouseLeave(planeRef)}
          >
            <img
              ref={planeRef}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de4b366b73d29554d12_illustration-1.png"
              alt="Plane"
              className="w-[286px] md:p-4 p-8 h-auto roll-out-in"
              style={{ position: "relative" }}
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
