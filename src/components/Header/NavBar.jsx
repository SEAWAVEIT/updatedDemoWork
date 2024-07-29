import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const menuRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevOpen) => !prevOpen);
    };

    const toggleServices = () => {
        setIsServicesOpen((prevOpen) => !prevOpen);
    };

    const animateMenu = (open) => {
        const menu = menuRef.current;
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

        if (open) {
            tl.to(menu, {
                duration: 0.3,
                height: "auto",
                opacity: 1,
                onStart: () => menu.style.display = 'block'
            });
        } else {
            tl.to(menu, {
                duration: 0.3,
                height: 0,
                opacity: 0,
                onComplete: () => menu.style.display = 'none'
            });
        }
    };

    useEffect(() => {
        animateMenu(isMenuOpen);
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="px-4 py-4 bg-white shadow md:flex md:items-center md:justify-between relative">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-[Poppins] cursor-pointer">
                    <Link to="/">Home</Link>
                </span>
                <span
                    className="text-3xl cursor-pointer mx-2 md:hidden block"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? "✖" : "☰"}
                </span>
            </div>

            <ul
                className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-transform duration-500 ease-in-out ${isMenuOpen ? "top-[80px] opacity-100 transform translate-y-0" : "top-[-400px] opacity-0 transform translate-y-[-20px]"}`}
                ref={menuRef}
            >
                <li className="mx-4 my-6 md:my-0">
                    <Link to="/" className="text-xl hover:text-cyan-500 duration-500">
                        HOME
                    </Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <button
                        className="text-xl hover:text-cyan-500 duration-500 w-full text-left"
                        onClick={toggleServices}
                        aria-expanded={isServicesOpen}
                    >
                        SERVICE
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 inline ml-2 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {isServicesOpen && (
                        <ul className="p-2 bg-black text-white z-1 rounded-lg mt-2">
                            <li>
                                <Link to="/customclearance">Custom Clearance</Link>
                            </li>
                            <li>
                                <Link to="/freightforwarding">Freight Forwarding</Link>
                            </li>
                            <li>
                                <Link to="/landfreight">Land Freight</Link>
                            </li>
                            <li>
                                <Link to="/warehousing">Warehousing</Link>
                            </li>
                            <li>
                                <Link to="/logisticsdesign">Logistics Design</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to="/contact" className="text-xl hover:text-cyan-500 duration-500">
                        CONTACT
                    </Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to="/getafreequote" className="text-xl hover:text-cyan-500 duration-500">
                        GET A FREE QUOTE
                    </Link>
                </li>
                <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
                    Get started
                </button>
            </ul>
        </nav>
    );
};

export default NavBar;
