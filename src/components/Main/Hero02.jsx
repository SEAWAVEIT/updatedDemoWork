import React from 'react';
import logo1 from '../../assets/logos/1.webp';
import logo2 from '../../assets/logos/2.webp';
import logo3 from '../../assets/logos/3.webp';
import logo4 from '../../assets/logos/4.webp';
import logo5 from '../../assets/logos/5.webp';
import logo6 from '../../assets/logos/6.webp';
import logo7 from '../../assets/logos/7.webp';
import logo8 from '../../assets/logos/8.webp';
import logo9 from '../../assets/logos/9.webp';
import './../../index.css'; // Import your custom CSS for animations

const logos = [
  { id: 1, src: logo1, alt: 'Image 1' },
  { id: 2, src: logo2, alt: 'Image 2' },
  { id: 3, src: logo3, alt: 'Image 3' },
  { id: 4, src: logo4, alt: 'Image 4' },
  { id: 5, src: logo5, alt: 'Image 5' },
  { id: 6, src: logo6, alt: 'Image 6' },
  { id: 7, src: logo7, alt: 'Image 7' },
  { id: 8, src: logo8, alt: 'Image 8' },
  { id: 9, src: logo9, alt: 'Image 9' },
];

function Hero02() {
  return (
    <div className='bg-white h-auto py-20'>
      <div className="flex overflow-hidden space-x-16 group">
        {/* First set of logos */}
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {logos.map((logo) => (
            <img key={logo.id} loading="lazy" src={logo.src} className="h-28" alt={logo.alt} />
          ))}
        </div>
        
        {/* Second set of logos for infinite loop */}
        {/* <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {logos.map((logo) => (
            <img key={logo.id} loading="lazy" src={logo.src} className="h-28" alt={logo.alt} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Hero02;
