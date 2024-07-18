import React from "react";
import { Link } from "react-router-dom";

function Hero06() {

	// const InnerDivStyle = {
	// 	paddingBottom: '10px',

	// };

	return (
		<div className="Hero06 md:h-screen flex md:flex-row flex-col flex-start items-center bg-white  ">
			<div className="md:w-[40%] ">
				<div className="md:p-8 md:mt-20 md:text-start text-center">
					<h1 className="text-4xl md:text-6xl">Why choose us</h1>
					<h1 className="text-4xl md:text-6xl">for your service</h1>
					<div className="md:my-4 md:text-lg text-sm">
						<p>Cursus congue tortor turpis faucibus </p>
						<p>massa accumsan egestas habitant in diam</p>
						<p>ollicitud ut placerat nascet</p>
					</div>
					<div>
						<Link
							to="#"
							className="relative inline-block md:px-4 md:py-2  px-2 py-1 font-medium group"
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
			<div className="md:w-[60%] flex md:flex-row flex-col p-4 px-8">
				<div className="topSec md:pt-24 mt-12   ">
					<div className="flex gap-1  my-4">
						<div className="w-1/3 ">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b0314aa349233739d_why%20choose.svg" alt="" /></div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold ">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>


					<div className="CustomBorder-Sub mx-auto my-8"></div>
					<div className="flex gap-1  my-4">
						<div className="w-1/3 ">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b7d75415a8cb4c30a_why%20choose-3.svg" alt="" /></div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold ">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
				</div>
			
				<div className="CustomBorder-main hidden md:block text-center mx-8   my-auto"></div>
				<div className="CustomBorder-Sub  md:hidden mx-auto my-8"></div>

				<div className="bottomSec md:pb-14 md:pt-12">
					<div className="flex gap-1  mb-8">
						<div className="w-1/3 ">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009b7d7541f38bb4c309_why%20choose-2.svg" alt="" /></div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold pb-2">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
					<div className="CustomBorder-Sub mx-auto my-8"></div>
					<div className="flex gap-1 my-4">
						<div className="w-1/3 ">
							<img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f2009bdff26411a67191d3_why%20choose-1.svg" alt="" /></div>
						<div className="w-2/3 pt-8">
							<h1 className="text-xl font-semibold ">Online Support</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui error odit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero06;
