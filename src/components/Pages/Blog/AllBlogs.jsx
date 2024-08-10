import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from "../../Items/Loader"
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
        <div className="flex flex-col bg-white h-auto px-6 md:px-12 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Published Blogs</h1>
            </div>
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="h-44 flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition ease-in-out duration-150 relative">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-gray-900">{post.name}</h2>
                                <h3 className="text-lg text-gray-600 mt-1 truncate">{post.topic}</h3>
                                {/* <p className="mt-4 text-gray-800 leading-relaxed">{post.description}</p> */}
                                {/* <p className="mt-2 text-gray-700 italic">{post.message}</p> */}
                            </div>
                            <Link to={`/blog/${post.id}`} className="absolute bottom-6 left-6">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                    View
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default AllBlogs;
