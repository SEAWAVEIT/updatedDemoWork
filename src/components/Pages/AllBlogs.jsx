import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { db, getDocs, collection } from "../../firebase/firebase";

function AllBlogs() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const postsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(postsList);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className=" flex bg-white h-auto px-12 mx-auto flex-col  ">
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Published Blogs</h1>
            </div>
            {posts.length > 0 ? (
                <div className="space-y-6 w-full ">
                    {posts.map((post) => (
                        <div key={post.id} className=" p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition ease-in-out duration-150">
                            <h2 className="text-2xl font-semibold text-gray-900">{post.name}</h2>
                            <h3 className="text-lg text-gray-600 mt-1">{post.topic}</h3>
                            {/* <p className="mt-4 text-gray-800 leading-relaxed">{post.description}</p> */}
                            {/* <p className="mt-2 text-gray-700 italic">{post.message}</p> */}

                            <Link to={`/blog/${post.id}`}>
                                {/* <button className='bg-blue-500 hover:cursor-pointer px-4 my-2 hover:bg-blue-700 py-1 text-white rounded-lg '>View</button> */}
                                <button className="btn btn-xs btn-active btn-accent text-white font-medium  ">View</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                
                <div class="flex items-center justify-center h-screen">
                <div class="relative">
                    <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default AllBlogs;
