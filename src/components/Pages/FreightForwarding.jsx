import React from "react";
import ServiceItem from "./ServiceItem";
import freightForward from "../../assets/services/freightForward.jpg";
import "../../index.css";

function FreightForwarding() {
    return (
        <div className="bg-white p-4 md:p-8">
            <div className="relative bg-black rounded-xl overflow-hidden mb-6 md:mb-8">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    src={freightForward}
                    alt="Freight Forwarding"
                />
                <div className=" relative flex justify-center items-center h-60 md:h-96">
                    <div class="logo-container GradientText">
                        <h1 id="page-logo" className="text-white  md:font-medium font-semibold text-3xl md:text-6xl z-0 text-center">Freight Forwarding</h1>
                    </div>
                </div>

            </div>

            <div className="px-4 md:px-20 mb-6 md:mb-8">
                <div className="mb-6 md:mb-8">
                    <p>
                        Freight forwarding consists of strategic logistics
                        planning and execution for the international movement of
                        goods, on behalf of shippers. Specifically, a freight
                        forwarder will carry out freight rate negotiations,
                        container tracking, customs documentation, and freight
                        consolidation, among other tasks.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl my-2">It Requires:</h2>

                    <ServiceItem text="Expert knowledge of customs standards and protocols,
                            which vary country to country and even port to port"/>
                    <ServiceItem text="Agile problem-solving, for when the weather,
                            technology or human nature fail to cater to timely
                            travels, as they are all wont to do"/>
                    <ServiceItem text="An instinct for network building, because in many
                            ways, a supply chain is only as strong as the
                            parties propelling it."/>
                    <ServiceItem text="Also need a license to do it." />
                </div>
            </div>

            <div className="mb-6 md:mb-8">
                <div className="text-center text-2xl md:text-4xl my-4">
                    Air Freight
                </div>
                <div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
                    <div className="lino"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
                    <div className="w-full md:w-1/2 flex flex-col md:pr-6 mb-4 md:mb-0">
                        <p className="mb-4">
                            Air Freight is one of the valuable parts of our
                            services which is insured to reach the cargo at
                            destination safely & timely.{" "}
                            <span className="GradientText">SEAWAVE</span> is an
                            air cargo agent to provide timely accurate and
                            customized services for all type of air cargo.
                            Export shipments are dispatched to all the five
                            continents. Therefore,{" "}
                            <span className="GradientText">SEAWAVE</span>{" "}
                            generates considerable activities throughout the
                            world in order to pave the export ways for industry
                            and commerce. In addition it is necessary to be well
                            acquainted with the regulations in the individual
                            countries and to have a good knowledge of the
                            facilities everywhere. Apart from General Cargo,{" "}
                            <span className="GradientText">SEAWAVE</span> is
                            capable of handling Vehicles, Heavy Weight and Odd
                            Dimensional Cargo by air to any destinations. Expect
                            the most competitive airfreight rates and
                            unmatchable service standards.
                        </p>
                        <div>
                            <h2 className="text-lg md:text-xl my-2">
                                Services:
                            </h2>
                            <ServiceItem text="Air Freight Booking" />
                            <ServiceItem text="World Wide Consolidation" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src="https://seawave.in/images/inner-pages/air-freight.webp"
                            className="rounded-lg filter drop-shadow-md"
                            alt="Air Freight"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center text-2xl md:text-4xl my-4">
                    Sea Freight
                </div>
                <div className="lineEffect mb-6 md:mb-8 flex justify-center text-center">
                    <div className="lino"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:gap-4 items-center">
                    <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                        <img
                            src="https://seawave.in/images/inner-pages/sea-freight.webp"
                            className="h-[300px] md:h-[450px] w-[320px] md:w-[480px] rounded-lg filter drop-shadow-md"
                            alt="Sea Freight"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:pl-2">
                        <p className="mb-4">
                            Air Freight is one of the valuable parts of our
                            services which is insured to reach the cargo at
                            destination safely & timely.{" "}
                            <span className="GradientText">SEAWAVE</span>{" "}
                            accepts following types of cargo and offer complete
                            services for moving the export cargo right from the
                            shippers' location to any port. Ocean Freight
                            Forwarding Services for export consignments are
                            provided.{" "}
                            <span className="GradientText">SEAWAVE</span> have
                            established its name in the shipping industry,
                            having rate negotiation skills and special
                            arrangements with leading liners. Freight services
                            are provided for moving LCL, FCL and Break-Bulk
                            Cargo, further supported by a fleet of container
                            vehicles and trucks available for offering inland
                            movement of containers and loose cargo.
                        </p>
                        <div>
                            <h2 className="text-lg md:text-xl my-2">
                                Services:
                            </h2>
                            <ServiceItem text="Freight Booking" />
                            <ServiceItem text="World Wide Consolidation" />
                            <ServiceItem text="Handling FCL’s & LCL’s shipments world wide" />
                            <ServiceItem text="NVOCC" />
                            <ServiceItem text="Handling of Projects & Break Bulk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreightForwarding;
