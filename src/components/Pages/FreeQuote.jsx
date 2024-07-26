import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FreeQuote() {
	return (
		<div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
			<div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
				<img
					className="absolute inset-0 w-full h-full object-cover opacity-30"
					src="https://www.seawave.in/images/inner-pages/logistic_banner.webp"
					alt="getafreequote"
				/>
				<div className="relative flex justify-center items-center  h-60 md:h-96 ">
					<h1 className="text-white text-2xl md:text-6xl z-0  text-center">
						Get A {""}
						<div className="waviy inline">
							<span style={{ '--i': 1 }}	>F</span>
							<span style={{ '--i': 2 }}	>r</span>
							<span style={{ '--i': 3 }}	>e</span>
							<span style={{ '--i': 4 }}	>e</span>
						</div>
						{""} Quote

					</h1>
				</div>
			</div>
			<div>
				<div className="InputDetails w-full grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="col-span-1 w-full">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						/>
					</div>
					<div className="col-span-1 w-full">
						<input
							type="text"
							placeholder="Your Email"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						/>
					</div>
					<div className="col-span-1 w-full">
						<input
							type="text"
							placeholder="Company Name"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						/>
					</div>
					<div className="col-span-1 w-full">
						<input
							type="text"
							placeholder="Contact Number"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						/>
					</div>
					<div className="col-span-1 md:col-span-2 w-full">
						<input
							type="text"
							placeholder="Company Address"
							className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
						/>
					</div>
				</div>
				<div>
					<div className="text-xl my-4">
						<h2>Services:</h2>
					</div>
					<div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							<div className="flex items-center gap-2">
								<input
									id="service1"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service1"
									className="ms-2 text-lg font-light"
								>
									Service 1
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									id="service2"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service2"
									className="ms-2 text-lg font-light"
								>
									Service 2
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									id="service3"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service3"
									className="ms-2 text-lg font-light"
								>
									Service 3
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									id="service4"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service4"
									className="ms-2 text-lg font-light"
								>
									Service 4
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									id="service5"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service5"
									className="ms-2 text-lg font-light"
								>
									Service 5
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									id="service6"
									type="checkbox"
									className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 focus:ring-2"
								/>
								<label
									htmlFor="service6"
									className="ms-2 text-lg font-light"
								>
									Service 6
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="my-4">
					<textarea
						name="Comments"
						id="Comments"
						placeholder="Comments/Remarks"
						className="w-full h-40 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
					></textarea>
				</div>
			</div>
		</div>
	);
}

export default FreeQuote;
