import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import SignIn from "../Pages/UserAuthentication/SignIn.jsx"

function Admin() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            }
            else {
                navigate("/signin")
            }
        })
        return () => unsubscribe()
    }, [navigate])

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.error('Sign Out Error', error);
        }
    }

    if (!user) {
        return <SignIn />
    }


    const postCareer = () => {
        navigate('/admincareerpostallowance');
    };

    const postBlog = () => {
        navigate('/adminblogpostallowance');
    };
    const allapplicants = () => {
        navigate('/allapplicants');
    };


    return (
        // <div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
        //     <div className="relative adminbg  rounded-xl overflow-hidden mb-6 md:mb-8">
        //         <div>
        //             {/*	<img
        // 				className="w-full"
        // 				src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHMxZXhzYTdhbXd1MXV1MTY3M2hienkxNGpmdm02OGRocjQxMGJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w5rTXEfu4as4YAR6QI/giphy.webp"
        // 				alt=""
        // 			/>*/}
        //         </div>

        //         <div className="relative flex justify-center items-center  h-60 md:h-96 ">
        //             <div className="container">
        //                 <div className="box">
        //                     <span style={{ "--i": 1 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 2 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 3 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 4 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 5 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 6 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 7 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 8 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 9 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 10 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 11 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 12 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 13 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 14 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 15 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                     <span style={{ "--i": 16 }}>
        //                         <i>EXPLORE</i>
        //                         YOUR
        //                         <i>THOUGHTS</i>
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        //         <form onSubmit={addPost} className="InputDetails w-full grid grid-cols-1 gap-4">
        //             <div className="w-full">
        //                 <input
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                     type="text"
        //                     placeholder="Name"
        //                     className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
        //                 />
        //             </div>
        //             <div className="w-full">
        //                 <input

        //                     value={topic}
        //                     onChange={(e) => setTopic(e.target.value)}
        //                     type="text"
        //                     placeholder="Topic"
        //                     className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
        //                 />
        //             </div>
        //             <div className="w-full">
        //                 <input

        //                     value={description}
        //                     onChange={(e) => setDescription(e.target.value)}
        //                     type="text"
        //                     placeholder="Description"
        //                     className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
        //                 />
        //             </div>


        //             <div className="my-4">
        //                 <textarea
        //                     value={message}
        //                     onChange={(e) => setMessage(e.target.value)}
        //                     name="Message"
        //                     id="Message"
        //                     placeholder="Message"
        //                     className="w-full h-40 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
        //                 ></textarea>
        //             </div>


        //             <button
        //                 type="submit"
        //                 navigate="/"
        //                 className="bg-blue-500 text-white font-semibold px-4 py-2 hover:text-slate-400 rounded-xl"
        //             >
        //                 Post
        //             </button>

        //         </form>
        //     </div>
        // </div >
        <>
            <div className='bg-white p-8 z-1'>
                <div><h1 className='text-5xl font-medium text-center'>Admin Dashboard</h1></div>
                <div className='bg-white p-8 flex md:flex-row items-center flex-col gap-16'>
                    <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                                alt="Career" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Careers</h2>
                            <p>Post Requirement</p>
                            <div className="card-actions justify-end">
                                <button onClick={postCareer} className="btn btn-sm btn-primary py-none">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card z-0  bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                                alt="Blog" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Blog</h2>
                            <p>Create Blog </p>
                            <div className="card-actions justify-end">
                                <button onClick={postBlog} className="btn  btn-sm btn-primary py-none">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card z-0  bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                                alt="Applicants" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Applicants</h2>
                            <p>View All Applied Applicants </p>
                            <div className="card-actions justify-end">
                                <button onClick={allapplicants} className="btn btn-sm btn-primary py-none">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Admin;
