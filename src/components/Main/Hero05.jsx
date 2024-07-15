import React from "react";

function Hero05() {
	return (
		<div className="Hero05 h-screen w-full flex justify-center items-center bg-white pt-[212px] md:pt- md:py-none  ">
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="w-full max-w-6xl bg-blue-400 p-6 rounded-lg shadow-xl">
					<div className="carousel w-full">
						<div
							id="item1"
							className="carousel-item w-full flex flex-col md:flex-row"
						>
							<img
								src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
								className="md:w-1/3 md:h-auto h-[198px] w-full rounded-md "
							/>
							<div className="md:w-2/3 w-full mt-4 md:p-8 text-white md:text-4xl text-lg">
								In the Indian customs system, the Special
								Valuation Branch (SVB) investigates the
								valuation of goods when they are imported
								between related parties.
							</div>
						</div>
						<div id="item2" className="carousel-item w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
								className="w-full"
							/>
						</div>
						<div id="item3" className="carousel-item w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
								className="w-full"
							/>
						</div>
					</div>
					<div className="flex w-full justify-center gap-2 py-2">
						<a
							href="#item1"
							className="bg-white px-4 py-3 rounded-full "
						>
							1
						</a>
						<a
							href="#item2"
							className="bg-white px-4 py-3  rounded-full "
						>
							2
						</a>
						<a
							href="#item3"
							className="bg-white px-4 py-3  rounded-full "
						>
							3
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero05;
