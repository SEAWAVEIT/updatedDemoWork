import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const animateMenu = (open) => {
    const menu = menuRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (open) {
      tl.to(menu, {
        duration: 0.3,
        height: 178,
        opacity: 1,
        display: "block",
      });
    } else {
      tl.to(menu, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        display: "none",
      });
    }
  };

  useEffect(() => {
    animateMenu(isOpen);
  }, [isOpen]);

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
                className="menu menu-sm dropdown-content rounded-box absolute z-20 mt-3 w-52 p-2 shadow bg-black text-white"
                ref={menuRef}
                style={{ height: 0, opacity: 0, overflow: "hidden" }}
              >
                <li>
                  <Link to={"about"}>About</Link>
                </li>
                <li>
                  <span>Services</span>
                  <ul className="p-2 bg-white text-black border-[1px] focus:shadow-[2px]">
                    <li>
                      <Link to={"customclearance"}>Custom Clearance</Link>
                    </li>
                    <li>
                      <Link>Freight Forwarding</Link>
                    </li>
                    <li>
                      <Link>Land Freight</Link>
                    </li>
                    <li>
                      <Link>Warehousing</Link>
                    </li>
                    <li>
                      <Link>Logistics Design</Link>
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
                    <Link>Freight Forwarding</Link>
                  </li>
                  <li>
                    <Link>Land Freight</Link>
                  </li>
                  <li>
                    <Link>Warehousing</Link>
                  </li>
                  <li>
                    <Link>Logistics Design</Link>
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
