import React from "react";
import { Link } from "react-router-dom";


function Hero08() {
	return (
		<div className="Hero08 w-full h-screen bg-white flex justify-center items-center">
			<div className="h-[90%] w-[90%] bg-blue-200 border-2 border-black flex justify-center items-center">
				<div className="flex flex-col md:flex-row justify-center items-center  p-4">
					<div className="">
						<div>
							<h1 className="md:text-6xl text-3xl font-bold">
								Lets's Connect
							</h1>
						</div>
						<div className="my-4 text-lg">
							<p>
								Cursus congue tortor turpis faucibus ollicitudin
								diam
							</p>
							<p>massa accumsan egestas habitant ut placerat</p>
						</div>

						<div className="flex flex-col gap-4 ">
							<input
								className="bg-white w-full px-6 py-4 rounded-full outline-blue-400"
								type="text"
								placeholder="Add me"
							/>
							<div>
								<a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
									<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
									</span>
									<span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
									<span className="relative invisible">Button Text</span>
								</a>
							</div>
							{/* <FollowButton/> */}
						</div>
					</div>
					<div className="hidden md:block ">
						<div> <img src="https://uploads-ssl.webflow.com/63ede56f5ceca72669fcaced/63f35c3c863d5816c2693a99_railline.png" alt="" /></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero08;
