import React from "react";
import boat from "./../../assets/svgs/boat.svg";
import truck from "./../../assets/svgs/truck.svg";
// import truck from "./../../assets/svgs/boat.svg";
import warehouse from "./../../assets/svgs/warehouse2.svg";
import calender from "./../../assets/svgs/calendar.svg";
import pad from "./../../assets/svgs/pad.svg";

function Hero07() {
  return (
    <div className="Hero07 w-full bg-white text-black ">
      <div className="flex items-center gap-2 flex-col">
        <h1 className="GradientText text-4xl">Services</h1>
        {/*<div className="CustomLine w-2 h-4"></div>*/}
        <p>OUR COMMITMENT IS TO FIND THE BEST SOLUTION FOR OUR CLIENTS</p>
      </div>
      <div>
        <div className="container grid grid-cols-3 over p-8">
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] border-slate-200 m-2 p-8">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="my-4">
              <h2 className="text-xl my-2">Custom Clearance</h2>
              <p className="text-sm text-slate-700">
                As a customs clearance specialist, this division can handle
                general cargo as well as project cargo..
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] border-slate-200 m-2 p-8">
            <div className="">
              <img src={boat} className="h-80" alt="" />
            </div>
            <div>
              <h2 className="text-xl">Freight Forwarding</h2>
              <p className="text-sm text-slate-700">
                It consists of strategic logistics planning and execution for
                the international movement of goods, on behalf of shippers.
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] border-slate-200 m-2 p-8">
            <div className="">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>*/}
              <img src={calender} alt="" className="h-36" />
            </div>
            <div>
              <h2 className="text-xl">Logistics Design</h2>
              <p className="text-sm text-slate-700">
                Logistics cost directly relates to time, mode of transportation,
                route of transport, and selection of carriers for export and
                import.
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] border-slate-200 m-2 p-8">
            <div className="">
              {/*<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>*/}
              <img src={truck} className="h-28" alt="" />
            </div>
            <div>
              <h2 className="text-xl">Land Freight</h2>
              <p className="text-sm text-slate-700">
                Land Transport, Delivery, Distribution Carrier & Own Vehicles
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] hover:border-cyan-400 hover:border-2 m-2 p-8">
            <div className="">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>*/}
              <img src={warehouse} className="h-20" alt="" />
            </div>
            <div>
              <h2 className="text-xl">Warehousing</h2>
              <p className="text-sm text-slate-700">
                Own Godown & Storage Area{" "}
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
          <div className="card flex flex-row gap-8 overflow-hidden rounded-box h-36 flex-grow place-items-center border-[1px] border-slate-200 m-2 p-8">
            <div className="">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="MediumVioletRed"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>*/}
              <img src={pad} alt="" className="h-32" />
            </div>
            <div>
              <h2 className="text-xl">Exim Consultancy</h2>
              <p className="text-sm text-slate-700">
                Consultancy related to Law, Act, Provisions, Circulars,
                Notifications, etc
              </p>
            </div>
          </div>
          {/*<div className="divider md:divider-horizontal"></div>*/}
        </div>
      </div>
    </div>
  );
}

export default Hero07;
