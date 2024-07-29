import React from "react";
import "../../index.css";

function Hero09() {
  // Define the FAQ data
  const faqs = [
    {
      question: "How does SEAWAVE deal with Trade Challenges? ",
      answer: "Seawave solves the basic challenges for trade in import and export by getting a vendor who can meet the technical & logistics aspects also complying for import and export, design complete logistics and set SOP for execution of work as per the customers requirement."
    },

    {
      question: "How does SEAWAVE handle a specific case? ",
      answer: "A client of ours, M/s Everest Kanto Cylinder Ltd., had to establish a plant in Gujarat in 2008. As the plant was being imported from the USA, Seawave provided all logistical support, managed cost analyses relating to custom provisions, and tagged the material to enable it to be identified. Teamwork and proper management allowed Seawave to achieve its objectives. The plant was successfully relocated from the United States to Gandhi Dham Gujarat, India."
    }
  ];

  return (
    <div className="py-4 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular"></p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h3>
        </div>

        <div className="mt-20">
          <ul>
            {faqs.map((faq, index) => (
              <li key={index} className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="30px" height="30px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      {faq.question}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg height="25px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 4l-6 6 6 6 6-6z"></path>
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero09;
