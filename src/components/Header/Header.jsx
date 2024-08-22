import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import navLogo from "../../assets/seawave/seawavewhitetextlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(prevOpen => !prevOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };
  const toggleServices = () => setIsServicesOpen(prevOpen => !prevOpen);

  const animateMenu = (open) => {
    const menu = menuRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    if (open) {
      tl.to(menu, { duration: 0.3, height: "auto", width: 200, right: 20, top: 60, opacity: 1 });
    } else {
      tl.to(menu, { duration: 0.3, height: 0, opacity: 0 });
    }
  };

  useEffect(() => {
    animateMenu(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (event) => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`px-4 z-10 relative header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar flex items-center justify-between">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl" onClick={handleLinkClick}>
            <img src={navLogo} alt="Logo" className="h-8 " />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex flex-grow justify-center">
          <ul className="whitespace-nowrap menu menu-horizontal px-1">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white text-black border-[1px] focus:shadow-[2px]">
                  <li><Link to="/customclearance" onClick={handleLinkClick}>Custom Clearance</Link></li>
                  <li><Link to="/freightforwarding" onClick={handleLinkClick}>Freight Forwarding</Link></li>
                  <li><Link to="/transportation" onClick={handleLinkClick}>Transportation</Link></li>
                  <li><Link to="/warehousing" onClick={handleLinkClick}>Warehousing</Link></li>
                  <li><Link to="/logisticsdesign" onClick={handleLinkClick}>Logistics Design</Link></li>
                  <li><Link to="/eximconsultancy" onClick={handleLinkClick}>Exim Consultancy</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            {/* <li><Link to="/admin" onClick={handleLinkClick}>Admin</Link></li> */}
            <li><Link to="/careers" onClick={handleLinkClick}>Career</Link></li>
            <li><Link to="/allblogs" onClick={handleLinkClick}>Blog</Link></li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <Link
            type="button"
            to="getafreequote"
            className="text-white whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={handleLinkClick}
          >
            Get A Free Quote
          </Link>
        </div>

        <div className="navbar-end lg:hidden">
          <button className="btn btn-ghost" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isOpen && (
            <ul
              className={`menu whitespace-nowrap menu-sm dropdown-content rounded-box absolute z-20 mt-3 w-full md:w-80 p-2 shadow bg-black text-white ${isMobile ? "block" : "hidden"}`}
              ref={menuRef}
            >
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
              <li>
                <button className="w-full text-left" onClick={toggleServices} aria-expanded={isServicesOpen}>
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 inline ml-2 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <ul className="p-2 bg-black text-sm whitespace-nowrap text-white z-1 rounded-lg mt-2">
                    <li><Link to="/customclearance" onClick={handleLinkClick}><p className="whitespace-nowrap">Custom Clearance</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                    <li><Link to="/freightforwarding" onClick={handleLinkClick}><p className="whitespace-nowrap">Freight Forwarding</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                    <li><Link to="/transportation" onClick={handleLinkClick}><p className="whitespace-nowrap">Transportation</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                    <li><Link to="/warehousing" onClick={handleLinkClick}><p className="whitespace-nowrap">Warehousing</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                    <li><Link to="/logisticsdesign" onClick={handleLinkClick}><p className="whitespace-nowrap">Logistics Design</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                    <li><Link to="/eximconsultancy" onClick={handleLinkClick}><p className="whitespace-nowrap">Exim Consultancy</p></Link></li>
                    <div className="borderDivider"><div className="serviceBorder"> </div></div>
                  </ul>
                )}
              </li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
              {/* <li><Link to="/admin" onClick={handleLinkClick}>Admin</Link></li> */}
              <li><Link to="/careers" onClick={handleLinkClick}>Career</Link></li>
              <li><Link to="/allblogs" onClick={handleLinkClick}>Blog</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
