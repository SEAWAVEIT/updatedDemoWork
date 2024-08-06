import React from 'react'
import career from "../../../assets/career/career.jpg"
import { Link } from "react-router-dom"
function Career() {
    return (
        <div className='bg-white p-8'>
            <div className='text-center text-5xl font-medium'><h1>Career</h1></div>
            <div className='flex justify-center items-center'>
                <img src={career} alt="" className='h-96' />
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-1/2 text-center my-2 text-slate-800'> Together, all the way
                    We're a global leader in container trade and logistics. And we're embarking on an industry-defining transformation that will change the way the world moves. It’s a big moment for all of us – and we all have our part to play. Are you ready?</div>
            </div>
            <div className=''>
                <div className='text-3xl text-center my-4 '><h1>We are looking for </h1></div>
                <div className='CareerCards w-1/3 mx-28 my-16 bg-slate-300 p-4 rounded-lg '>
                    {/* <img
                        className='h-40'
                        src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?ga=GA1.1.2119607277.1722853665&semt=sph" alt="" /> */}
                    <div>
                        <h2 className='text-3xl my-2 font-medium'>Developer</h2>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sint corporis quasi facere eligendi vel veniam quisquam, suscipit aut ducimus, tenetur vero! Quis?</p>
                    </div>
                    <div>
                        <Link to="/careerinputfield">
                            <button className='text-sm bg-blue-400 text-white px-4 py-2 rounded-md my-4'>Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Career