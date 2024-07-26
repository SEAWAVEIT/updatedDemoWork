
import React from 'react'
import check from "../../assets/svgs/check.svg";

function ServiceItem({ text }) {
    return (
        <div className="flex items-center p-1">
            <img src={check} alt="" className="h-5 md:h-6 mr-4" />
            <p className="text-sm md:text-base">{text}</p>
        </div>
    )
}

export default ServiceItem