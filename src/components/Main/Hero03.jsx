import React, { useRef, useState } from "react";
import { gsap } from "gsap";

function Hero03() {
  const ship1Ref = useRef(null);
  const ship2Ref = useRef(null);
  const plane1Ref = useRef(null);
  const plane2Ref = useRef(null);
  const truck1Ref = useRef(null);
  const truck2Ref = useRef(null);
  // const plane1Ref = useRef(null);
  // const plane2Ref = useRef(null);
  const [hover, setHover] = useState(false);

  const animateShip = (enterRef, leaveRef) => {
    gsap.to(leaveRef.current, {
      x: 350,
      y: 350,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        gsap.fromTo(
          enterRef.current,
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

  const animatePlane = (enterRef, leaveRef) => {
    gsap.to(leaveRef.current, {
      x: 350,
      y: 350,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        gsap.fromTo(
          enterRef.current,
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
    <div className="Hero03 bg-white pt-[429px] sm:p-12 md:h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl">We Provide Safe </h1>
        <h1 className="text-3xl sm:text-5xl">And Reliable Cargo Solutions</h1>
      </div>
      <div className="cards flex flex-wrap justify-center gap-8 sm:gap-12">
        <div className="card border-2 border-slate-800 md:w-1/3 w-80 shadow-xl m-8">
          <figure
            onMouseEnter={() => animateShip(truck1Ref, truck2Ref)}
            onMouseLeave={() => animateShip(truck2Ref, truck1Ref)}
            className="relative overflow-hidden"
          >
            {/* <img
              ref={ship1Ref}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de43f4efb3b9957d7c6_illustration-2.png"
              alt="Ship"
              className="w-[286px] absolute top-0 left-0 z-1 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 1, transition: "opacity 2s" }}
            /> */}
            <img
              ref={truck2Ref}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30c9849b46ceb69cad354_big%20track.png"
              alt="Truck"
              className="w-[286px] absolute top-0 left-0 z-2 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 0, transition: "opacity 1s" }}
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
            // onMouseEnter={() => handleMouseEnter(plane1Ref)}
            // onMouseLeave={() => handleMouseLeave(plane2Ref)}
            onMouseOver={() => animatePlane(plane1Ref, plane2Ref)}
            onMouseLeave={() => animatePlane(plane2Ref, plane1Ref)}
          >
            {/* <img
              ref={plane1Ref}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de4b366b73d29554d12_illustration-1.png"
              alt="Plane"
              className="w-[286px] md:p-4 p-8 h-auto roll-out-in"
              style={{ position: "relative" }}
            /> */}
            <img
              ref={plane2Ref}
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

        <div className="card border-2 border-slate-800 md:w-1/3 w-80 shadow-xl m-8">
          <figure
            onMouseEnter={() => animateShip(ship1Ref, ship2Ref)}
            onMouseLeave={() => animateShip(ship2Ref, ship1Ref)}
            className="relative overflow-hidden"
          >
            {/* <img
              ref={ship1Ref}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de43f4efb3b9957d7c6_illustration-2.png"
              alt="Ship"
              className="w-[286px] absolute top-0 left-0 z-1 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 1, transition: "opacity 2s" }}
            /> */}
            <img
              ref={ship2Ref}
              src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f30de43f4efb3b9957d7c6_illustration-2.png"
              alt="Ship"
              className="w-[286px] absolute top-0 left-0 z-2 md:p-4 p-8 h-auto roll-out-in"
              style={{ opacity: 0, transition: "opacity 1s" }}
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

      </div>
    </div>
  );
}

export default Hero03;
