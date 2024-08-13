import React from 'react';
import './chat.css'; // Import CSS file for animations
import doubt from "../../assets/faqs/doubt.png";
import solution from "../../assets/faqs/solution.png";

const Hero09 = () => {
  return (
    <div className='bg-white mx-auto  h-auto'>
      <div className='FAQChat mx-auto  md:px-24 md:py-8 bg-white h-auto'>
        <section className="chat w-full flex justify-between flex-col md:flex-row ">

          <div>
            <div className="chat__message chat__message_A" style={{ '--delay': '1s' }}>
              <div className="chat__message__circle">
                <img src={doubt} alt="Doubt Icon" />
              </div>
              <div className="chat__content">
                <p>How does SEAWAVE deal with Trade Challenges?</p>
              </div>
            </div>
            <div className="chat__message chat__message_B" style={{ '--delay': '3s' }}>
              <div className="chat__content">
                <p>Seawave solves the basic challenges for trade in import and export by getting a vendor who can meet the technical & logistics aspects also complying for import and export, design complete logistics and set SOP for execution of work as per the customers requirement.</p>
              </div>
              <div className="chat__message__circle">
                <img src={solution} alt="Solution Icon" />
              </div>
            </div>
          </div>


          <div>
            <div className="chat__message chat__message_A" style={{ '--delay': '6s' }}>
              <div className="chat__message__circle">
                <img src={doubt} alt="Doubt Icon" />
              </div>
              <div className="chat__content">
                <p>How does SEAWAVE handle a specific case?</p>
              </div>
            </div>
            <div className="chat__message chat__message_B" style={{ '--delay': '9s' }}>
              <div className="chat__content">
                <p>A client of ours, M/s Everest Kanto Cylinder Ltd., had to establish a plant in Gujarat in 2008. As the plant was being imported from the USA, Seawave provided all logistical support, managed cost analyses relating to custom provisions, and tagged the material to enable it to be identified. Teamwork and proper management allowed Seawave to achieve its objectives. The plant was successfully relocated from the United States to Gandhi Dham Gujarat, India.</p>
              </div>
              <div className="chat__message__circle">
                <img src={solution} alt="Solution Icon" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero09;
