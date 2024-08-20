import React, { useRef, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import plane from "../../../assets/editedplane-2.png"

function Contact() {
	const EntirePageEffect = useRef();
	const droneRef = useRef();
	const circleRef = useRef(null);

	useEffect(() => {
		const circle = circleRef.current;

		const tl = gsap.timeline({ repeat: -1, yoyo: true });

		tl.to(circle, {
			// scale: 0,
			// delay: 1,
			duration: 1,
			rotate: 360,

			ease: "power1.inOut",
		});
		return () => {
			tl.kill();
		};
	}, []);

	useGSAP(() => {
		gsap.from(EntirePageEffect.current.children, {
			opacity: 0,
			duration: 1,
			y: 40,
			delay: 0.4,
			// stagger: 0.4,
		});

		gsap.from(droneRef.current, {
			opacity: 0,
			duration: 1,
			x: 100,
			y: -100,
			delay: 1,
		});
	});

	return (
		<div className="px-6 bg-white w-full md:h-screen pt-16  py-10">
			<div
				ref={EntirePageEffect}
				className="bg-white md:h-auto w-full flex justify-center items-center "
			>
				<div>
					<div className="grid md:grid-cols-3 grid-flow-row gap-4 ">
						<div className="col-span-1 row-span-2 flex-col flex md:pl-6 justify-center">
							<div className="md:text-6xl md:font-bold text-center font-semibold text-4xl ">
								<h1 className="title-word title-word-1">Emergency</h1>
								<h1 className="title-word title-word-2">Solutions</h1>
								<h1 className="title-word title-word-3">for</h1>
								<h1 className="title-word title-word-4">Delivery</h1>
							</div>
							<div className="pl-6 pt-8">
								<p>
									Aliquam Porta Nisl Dolor, Molestie Pellentesque
								</p>
								<p> Molestie In. Morbi Metus Neque, Elementum</p>
								<p> Ullamcorper Molestie</p>
							</div>
						</div>
						<div className=" md:px-1 md:py-1 py-8 col-span-1 row-span-2 flex items-center justify-center">
							<div>
								<img
									ref={droneRef}
									src={plane}
								/>
							</div>
						</div>
						<div className="col-span-1 flex md:flex-col flex-row items-center md:pt-18 gap-4 ">
							<div className=" flex-1 md:flex items-center order-2 justify-center">
								<div
									ref={circleRef}
									className="md:h-[120px] md:w-[120px] h-[60px] w-[60px]  -rotate-45 rounded-full bg-black text-white md:p-4  flex justify-center items-center"
								>
									<p className="md:text-2xl text-[12px]">Quote</p>
								</div>
							</div>
							<div className="paraContactDiv md:text-xl text-sm flex-1  flex flex-col gap-4 pt-20 align-bottom order-3">
								<div className=" text-start list-none ">
									<div className="flex items-center gap-x-2 mb-2 ">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
										</svg>
										<li className="hover:text-pink-400">Fastest Trait Times</li>
									</div>

									<div className="flex items-center gap-2 mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
										</svg>
										<li className="text-nowrap hover:text-pink-400">Security and Protection</li>
									</div>

									<div className="` flex items-center gap-2 hover:text-pink-400 mb-2">

										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
										</svg>
										<li className="hover:text-pink-400">Safe Packaging</li>
									</div>

									<div className="flex items-center gap-2  mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
										</svg>
										{/* <WAVESVG /> */}
										<li className="hover:text-pink-400">Guaranteed Delivery</li>
									</div>


								</div>
								<div className="">
									<button className="custom-btn btn-12">
										<span>Click!</span>
										<span>Read More</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</div>

	);
}

export default Contact;