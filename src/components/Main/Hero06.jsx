import React from "react";
import { Link } from "react-router-dom";

function Hero06() {
	return (
		<div className="Hero06 h-screen flex flex-start items-center bg-white  ">
			<div className="w-[40%] ">
				<div className="p-8 text-start">
					<h1 className="text-4xl md:text-6xl">Why choose us</h1>
					<h1 className="text-4xl md:text-6xl">for your service</h1>
					<div className="my-4 text-lg">
						<p>Cursus congue tortor turpis faucibus </p>
						<p>massa accumsan egestas habitant in diam</p>
						<p>ollicitud ut placerat nascet</p>
					</div>
					<div>
						<Link
							to="#"
							className="relative inline-block px-4 py-2 font-medium group"
						>
							<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-white"></span>
							<span className="relative text-black group-hover:text-black">
								<div className="flex items-center gap-2 p-2">
									<p>Learn More</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 15l7-7 7 7"
										/>
									</svg>
								</div>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-[60%] ">
				<div className="topSec flex flex-row  ">
					<div className="flex">
						<div className="w-1/3">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b0314aa349233739d_why%20choose.svg" alt="" /></div>
						<div className="w-2/3">
							<h1 className="text-2xl font-semibold pb-2">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
					<div className="flex ">
						<div className="w-1/3">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b7d75415a8cb4c30a_why%20choose-3.svg" alt="" /></div>
						<div className="w-2/3">
							<h1 className="text-2xl font-semibold pb-2">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
				</div>
				<div className="CustomBorder-main text-center mx-6 my-12"></div>
				<div className="bottomSec  flex flex-row ">
					<div className="flex ">
						<div className="w-1/3">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b7d7541f38bb4c309_why%20choose-2.svg" alt="" /></div>
						<div className="w-2/3">
							<h1 className="text-2xl font-semibold pb-2">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
					<div className="flex ">
						<div className="w-1/3">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009bdff26411a67191d3_why%20choose-1.svg" alt="" /></div>
						<div className="w-2/3">
							<h1 className="text-2xl font-semibold pb-2">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero06;
