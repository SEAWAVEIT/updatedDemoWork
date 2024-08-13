import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import boat from "./../../assets/svgs/boat.svg";
import truck from "./../../assets/svgs/truck.svg";
import warehouse from "./../../assets/svgs/warehouse2.svg";
import calender from "./../../assets/svgs/calendar.svg";
import pad from "./../../assets/svgs/pad.svg";
import { useNavigate } from "react-router-dom";

function Hero07() {
  const navigate = useNavigate();

  const buttonRefTruck = useRef(null);
  const buttonRefShip = useRef(null);
  const buttonRefPlane = useRef(null);

  const animateButtonOverTruck = () => {
    gsap.to(buttonRefTruck.current, {
      rotation: 90,
    });
  };

  const animateButtonOutTruck = () => {
    gsap.to(buttonRefTruck.current, {
      rotation: 0,
    });
  };



  const navigateTo = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="Hero07 bg-white text-black h-auto px-auto mx-auto">
      <div className="text-center mb-8">
        <h1 className="GradientText text-4xl">Services</h1>
        <p className="my-4">
          OUR COMMITMENT IS TO FIND THE BEST SOLUTION FOR OUR CLIENTS
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 justify-items-center">
        <div
          onClick={() => navigateTo('/customclearance')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="MediumVioletRed"
              className="h-20 w-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h2 className="text-xl text-center mb-4">Custom Clearance</h2>
          <div className="hover_content absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <p className=" text-sm text-purple-500  font-bold text-center p-4">
                As a customs clearance specialist, this division can handle general cargo as well as project cargo.
              </p></div>
            <div className="card-actions justify-center">
              <button
                ref={buttonRefTruck}
                onMouseEnter={animateButtonOverTruck}
                onMouseLeave={animateButtonOutTruck}
                className="bg-white text-black border-2 border-black hover:bg-white hover:text-black p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
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

        <div
          onClick={() => navigateTo('/freightforwarding')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <img src={boat} className="h-20" alt="Boat" />
          </div>
          <h2 className="text-xl text-center mb-4">Freight Forwarding</h2>
          <div className="hover_content absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-sky-500 font-bold text-center p-4">
              It consists of strategic logistics planning and execution for the international movement of goods, on behalf of shippers.
            </p>
          </div>
        </div>

        <div
          onClick={() => navigateTo('/landfreight')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <img src={truck} className="h-20" alt="Truck" />
          </div>
          <h2 className="text-xl text-center mb-4">Transportation</h2>
          <div className="hover_content absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-purple-500  font-bold  text-center p-4">
              Land Transport, Delivery, Distribution Carrier & Own Vehicles
            </p>
          </div>
        </div>


        <div
          onClick={() => navigateTo('/warehousing')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <img src={warehouse} className="h-20" alt="Warehouse" />
          </div>
          <h2 className="text-xl text-center mb-4">Warehousing</h2>
          <div className="hover_content absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-sky-500 font-bold text-center p-4">
              Own Godown & Storage Area
            </p>
          </div>
        </div>





        <div
          onClick={() => navigateTo('/eximconsultancy')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <img src={pad} className="h-20" alt="Pad" />
          </div>
          <h2 className="text-xl text-center mb-4">Exim Consultancy</h2>
          <div className="hover_content absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-purple-500  font-bold text-center p-4">
              Consultancy related to Law, Act, Provisions, Circulars, Notifications, etc
            </p>
          </div>
        </div>


        <div
          onClick={() => navigateTo('/logisticsdesign')}
          className="ServiceCard relative group"
        >
          <div className="icon mb-4">
            <img src={calender} className="h-16" alt="Calendar" />
          </div>
          <h2 className="text-xl text-center mb-4">Logistics Design</h2>
          <div className="hover_content absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-sky-500 font-bold text-center p-4">
              Logistics cost directly relates to time, mode of transportation, route of transport, and selection of carriers for export and import.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero07;
