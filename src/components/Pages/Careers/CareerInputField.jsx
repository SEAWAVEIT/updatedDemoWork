import React from 'react'

function CareerInputField() {
    return (
        <div className='bg-white p-8'>
            <div><h1 className='text-4xl font-medium text-center'>Job Title</h1></div>
            <div className='inputFields px-8 flex flex-col gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your email?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>
            </div>
        </div>
    )
}

export default CareerInputField