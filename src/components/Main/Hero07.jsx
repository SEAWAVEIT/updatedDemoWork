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
        <p className="text-center">
          OUR COMMITMENT IS TO FIND THE BEST SOLUTION FOR OUR CLIENTS
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {/* Custom Clearance Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="MediumVioletRed"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl my-2">Custom Clearance</h2>
            <p className="text-sm text-slate-700">
              As a customs clearance specialist, this division can handle
              general cargo as well as project cargo.
            </p>
          </div>
        </div>

        {/* Freight Forwarding Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <img src={boat} className="h-20 md:h-28" alt="" />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl">Freight Forwarding</h2>
            <p className="text-sm text-slate-700">
              It consists of strategic logistics planning and execution for the
              international movement of goods, on behalf of shippers.
            </p>
          </div>
        </div>

        {/* Logistics Design Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <img src={calender} className="h-20 md:h-36" alt="" />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl">Logistics Design</h2>
            <p className="text-sm text-slate-700">
              Logistics cost directly relates to time, mode of transportation,
              route of transport, and selection of carriers for export and
              import.
            </p>
          </div>
        </div>

        {/* Land Freight Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <img src={truck} className="h-20 md:h-28" alt="" />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl">Land Freight</h2>
            <p className="text-sm text-slate-700">
              Land Transport, Delivery, Distribution Carrier & Own Vehicles
            </p>
          </div>
        </div>

        {/* Warehousing Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <img src={warehouse} className="h-20 md:h-24" alt="" />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl">Warehousing</h2>
            <p className="text-sm text-slate-700">
              Own Godown & Storage Area
            </p>
          </div>
        </div>

        {/* Exim Consultancy Card */}
        <div className="card flex gap-4 overflow-hidden rounded-box place-items-center border-[1px] border-slate-200 p-4 md:p-8">
          <div className="flex-shrink-0">
            <img src={pad} className="h-20 md:h-32" alt="" />
          </div>
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl">Exim Consultancy</h2>
            <p className="text-sm text-slate-700">
              Consultancy related to Law, Act, Provisions, Circulars,
              Notifications, etc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero07;
