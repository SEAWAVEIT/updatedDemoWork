import React from "react";
import "../../index.css";
import ServiceItem from "./ServiceItem";
import customClearance from "../../assets/services/customClearance.jpg";

function CustomClearance() {
	return (
		<div className="bg-white p-4 md:p-8">
			<div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
				<img
					className="absolute inset-0 w-full h-full object-cover opacity-30"
					src={customClearance}
					alt="Custom Clearance"
				/>
				<div className=" relative flex justify-center items-center h-60 md:h-96">
					<div class="logo-container GradientText">
						<h1 id="page-logo" className="text-white md:font-medium font-semibold  text-3xl md:text-6xl z-0 text-center">Custom Clearance</h1>
					</div>
				</div>
			</div>

			<div className="px-4 md:px-20 mb-6 md:mb-8">
				<p className="mb-4">
					<span className="GradientText">SEAWAVE's</span> own Clearing
					& Forwarding Division,{" "}
					<span className="GradientText">
						SEAWAVE FORWARDING AND LOGISTICS PVT LTD
					</span>{" "}
					is an authorised{" "}
					<span className="font-normal">
						CUSTOM HOUSE AGENT (CHA)
					</span>
					.
				</p>
				<p className="mb-4">
					This division specializes in custom clearance of general and
					project cargo. The team comprises experienced and qualified
					personnel who have thorough knowledge of tariff schedules,
					customs regulations, and keep abreast of frequent changes in
					custom laws, import-export policies, etc.
				</p>
				<p className="mb-4">
					Document studies are carried out well before the arrival of
					shipment to allow for error correction and avoid unnecessary
					delays.
				</p>
				<p className="mb-4">
					Convenience of customers is ensured by finalizing paperwork,
					documents, etc., and saving clients from complex
					administrative procedures.
				</p>
				<p>
					Expect more from{" "}
					<span className="GradientText">SEAWAVE</span>, including
					assistance with applications for licenses, project imports,
					exports, and post-shipment processing of various goods.
				</p>
			</div>

			<div className="px-4 md:px-20 mb-6 md:mb-">
				<h2 className="text-xl md:text-2xl my-2 font-medium">
					Services
				</h2>
				<div className="flex flex-col ">
					<ServiceItem text="Custom Documentation" />
					<ServiceItem text="Import & Export Documentation" />
					<ServiceItem text="Examination of Import & Export Consignments" />
					<ServiceItem text="Handling of stuffing & de-stuffing at ports" />
					<ServiceItem text="Clearance at ICD’s, Land Customs (NEPAL & BANGLADESH BORDER)" />
				</div>
			</div>
		</div>
	);
}


export default CustomClearance;
