import React, { useEffect, useState } from 'react';
import { db, collection, addDoc } from '../../firebase/firebase.js';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import SignIn from "../Pages/UserAuthentication/SignIn.jsx"

function Admin() {
    const [name, setName] = useState("")
    const [topic, setTopic] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    const { user } = useAuth()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setUser(user)
    //         }
    //         else {
    //             navigate("/signin")
    //         }
    //     })
    //     return () => unsubscribe()
    // }, [navigate])

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.error('Sign Out Error', error);
        }
    }


    const addPost = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                name,
                topic,
                description,
                message,
                createdAt: new Date(),
            })
            setName("")
            setTopic("")
            setDescription("")
            setMessage("")
            console.log(name, topic, description, message, docRef.id)
            navigate('/blog');
        } catch (error) {
            console.log("Eroor : ", error);
        }
    }
    if (!user) {
        return <SignIn />
    }

    return (
        <div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
            <div className="relative adminbg  rounded-xl overflow-hidden mb-6 md:mb-8">
                <div>
                    {/*	<img
						className="w-full"
						src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHMxZXhzYTdhbXd1MXV1MTY3M2hienkxNGpmdm02OGRocjQxMGJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w5rTXEfu4as4YAR6QI/giphy.webp"
						alt=""
					/>*/}
                </div>

                <div className="relative flex justify-center items-center  h-60 md:h-96 ">
                    <div className="container">
                        <div className="box">
                            <span style={{ "--i": 1 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 2 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 3 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 4 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 5 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 6 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 7 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 8 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 9 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 10 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 11 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 12 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 13 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 14 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 15 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                            <span style={{ "--i": 16 }}>
                                <i>EXPLORE</i>
                                YOUR
                                <i>THOUGHTS</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={addPost} className="InputDetails w-full grid grid-cols-1 gap-4">
                    <div className="w-full">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <input

                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            type="text"
                            placeholder="Topic"
                            className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <input

                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Description"
                            className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                        />
                    </div>


                    <div className="my-4">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="Message"
                            id="Message"
                            placeholder="Message"
                            className="w-full h-40 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        navigate="/"
                        className="bg-blue-500 text-white font-semibold px-4 py-2 hover:text-slate-400 rounded-xl"
                    >
                        Post
                    </button>

                </form>
            </div>
        </div >
    );
}

export default Admin;
