import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const animateMenu = (open) => {
    const menu = menuRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (open) {
      tl.to(menu, {
        duration: 0.3,
        height: "auto",
        width: "auto",
        opacity: 1,
      });
    } else {
      tl.to(menu, {
        duration: 0.3,
        height: 0,
        opacity: 0,
      });
    }
  };


  useEffect(() => {
    animateMenu(isOpen);
  }, [isOpen]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-4 z-10 relative">
      <div className="navbar justify-between">
        <div className="navbar-start">
          <div className="dropdown relative">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isOpen && (
              <ul
                className={`menu menu-sm dropdown-content rounded-box absolute z-20 mt-3 w-full md:w-80 p-2 shadow bg-black text-white ${isMobile ? "block" : "hidden"
                  }`}
                ref={menuRef}
              >
                <li>
                  <Link to={"about"}>About</Link>
                </li>
                <li>
                  <span>Services</span>
                  <ul className="p-2 bg-black text-white z-1 4 rounded-lg focus:shadow-[2px]">
                    <li>
                      <Link to={"customclearance"}>Custom Clearance</Link>
                    </li>
                    <li>
                      <Link to={"freightforwarding"}>Freight Forwarding</Link>
                    </li>
                    <li>
                      <Link to={"landfreight"}>Land Freight</Link>
                    </li>
                    <li>
                      <Link to={"warehousing"}>Warehousing</Link>
                    </li>
                    <li>
                      <Link to={"logisticsdesign"}>Logistics Design</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"getafreequote"}>Get A Free Quote</Link>
                </li>
              </ul>
            )}
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white text-black border-[1px] focus:shadow-[2px]">
                  <li>
                    <Link to={"customclearance"}>Custom Clearance</Link>
                  </li>
                  <li>
                    <Link to={"freightforwarding"}>Freight Forwarding</Link>
                  </li>
                  <li>
                    <Link to={"landfreight"}>Land Freight</Link>
                  </li>
                  <li>
                    <Link to={"warehousing"}>Warehousing</Link>
                  </li>
                  <li>
                    <Link to={"logisticsdesign"}>Logistics Design</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"getafreequote"}>Get A Free Quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
