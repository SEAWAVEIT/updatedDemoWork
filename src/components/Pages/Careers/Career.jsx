import React, { useState, useEffect } from 'react'
import career from "../../../assets/career/career.jpg"
import { Link } from "react-router-dom"
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../firebase/firebase"
function Career() {
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'jobvacancy'));
                const jobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setJobs(jobLists);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);
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
            {jobs.length > 0 ?
                (
                    <div className='w-1/3' >
                        <div className='text-3xl text-center my-4 '><h1>We are looking for </h1></div>
                        {jobs.map((job) => (
                            <div key={job.id} className="h-44 flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition ease-in-out duration-150 relative">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold text-gray-900">{job.position}</h2>
                                    <h3 className="text-lg text-gray-600 mt-1 truncate">{job.department}</h3>
                                    {/* <p className="mt-4 text-gray-800 leading-relaxed">{post.description}</p> */}
                                    {/* <p className="mt-2 text-gray-700 italic">{post.message}</p> */}
                                </div>
                                <Link to={`/jobdetails/${job.id}`} className="absolute bottom-6 left-6">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                        View
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>) : (<div className="flex items-center justify-center h-screen">
                        <div className="relative">
                            <div className="h-24 w-24 border-t-8 border-b-8 border-gray-200 rounded-full"></div>
                            <div className="absolute top-0 left-0 h-24 w-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin"></div>
                        </div>
                    </div>)}



        </div>

    )
}

export default Career

