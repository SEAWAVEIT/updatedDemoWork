import React from "react";
import boat from "./../../assets/svgs/boat.svg";
import truck from "./../../assets/svgs/truck.svg";
import warehouse from "./../../assets/svgs/warehouse2.svg";
import calender from "./../../assets/svgs/calendar.svg";
import pad from "./../../assets/svgs/pad.svg";

function Hero07() {
  return (
    <div className="Hero07 w-full bg-white text-black p-4 md:p-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="GradientText text-4xl text-center">Services</h1>
        <p className="text-center my-4">
          OUR COMMITMENT IS TO FIND THE BEST SOLUTION FOR OUR CLIENTS
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="h-20 w-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h2 className="text-xl text-center">Custom Clearance</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                As a customs clearance specialist, this division can handle general cargo as well as project cargo.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}
        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <img src={boat} className="h-20 md:h-28" alt="Boat" />
            </div>
            <h2 className="text-xl text-center">Freight Forwarding</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                It consists of strategic logistics planning and execution for the international movement of goods, on behalf of shippers.
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <img src={calender} className="h-16 md:h-24" alt="Calendar" />
            </div>
            <h2 className="text-xl text-center">Logistics Design</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                Logistics cost directly relates to time, mode of transportation, route of transport, and selection of carriers for export and import.
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <img src={truck} className="h-20 md:h-28" alt="Truck" />
            </div>
            <h2 className="text-xl text-center">Land Freight</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                Land Transport, Delivery, Distribution Carrier & Own Vehicles
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <img src={warehouse} className="h-20 md:h-28" alt="Warehouse" />
            </div>
            <h2 className="text-xl text-center">Warehousing</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                Own Godown & Storage Area
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceCard">
          <div className="content">
            <div className="icon">
              <img src={pad} className="h-20 md:h-28" alt="Pad" />
            </div>
            <h2 className="text-xl text-center">Exim Consultancy</h2>
            <div className="hover_content">
              <p className="text-sm text-slate-700 text-center">
                Consultancy related to Law, Act, Provisions, Circulars, Notifications, etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero07;
