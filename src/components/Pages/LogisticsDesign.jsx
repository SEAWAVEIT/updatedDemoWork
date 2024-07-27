import React from "react";
import ServiceItem from "./ServiceItem";
import logisticsDesign from "../../assets/services/logisticDesign.jpg";
import "../../index.css";

function LogisticsDesign() {
	return (
		<div className="bg-white p-4 md:p-8">
			<div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
				<img
					className="absolute inset-0 w-full h-full object-cover opacity-30"
					src={logisticsDesign}
					alt="Logistics Design"
				/>
				<div className=" relative flex justify-center items-center h-60 md:h-96">
					<div class="logo-container GradientText">
						<h1 id="page-logo" className=" md:font-medium font-semibold text-white text-3xl md:text-6xl z-0 text-center">Logistics Design</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 px-4 md:px-20 mb-6 md:mb-8">
				<p>
					The logistics cost is very high when it comes to making
					products competitive in the market.
				</p>
				<p>
					Logistics cost directly relates to time, mode of
					transportation, route of transport, and selection of
					carriers for export and import.
				</p>
				<p>
					Our goal is to make products competitive by providing design
					logistics.
				</p>
				<p>
					<span className="GradientText">
						SEAWAVE FORWARDING & LOGISTICS PVT. LTD.
					</span>{" "}
					designs products for manufacturing, packaging, shipping,
					warehousing, merchandising, and return packing. Typically,
					it includes objectives such as scale, cost efficiency,
					environmental impact, security, and marketing.
				</p>
			</div>
			<div className="px-4 md:px-8">
				<div>
					<h2 className="text-xl md:text-2xl my-2">
						Values of Logistics Design:
					</h2>


					<ServiceItem text="It reduces the costs & environmental impact." />
					<ServiceItem text="Simplifying planning & improving operational
							efficiency."/>
					<ServiceItem text="Marketing benefits such as products that look good
							on shelves."/>

				</div>
			</div>
		</div>
	);
}

export default LogisticsDesign;
