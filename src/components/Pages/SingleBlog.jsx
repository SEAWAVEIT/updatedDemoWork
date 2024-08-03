import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../firebase/firebase";
// import './SingleBlog.css';
import { format } from 'date-fns'; // Import date-fns

function SingleBlog() {
    const [post, setPost] = useState(null);
    const { postId } = useParams(); // Get postId from URL parameters

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'posts', postId); // Reference to the specific document
                const docSnap = await getDoc(docRef); // Use getDoc to fetch a single document

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate(); // Convert Firestore Timestamp to JavaScript Date

                    // Debugging: Log the value of createdAt
                    console.log('CreatedAt:', createdAt);

                    setPost({
                        id: docSnap.id,
                        ...data,
                        createdAt
                    });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };

        fetchBlog();
    }, [postId]);

    if (!post) {
        return (
            <div clas>
                <div class="flex items-center justify-center h-auto">
                    <div class="relative">
                        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                        </div>
                    </div>
                </div>
            </div>);
    }

    return (
       <div className="bg-white h-auto py-8 px-12 ">
         <div className='SingleBlog rounded-xl'>
            <div className='BlogTopic text-5xl font-semibold mb-4 text-center'>
                <h1>{post.topic}</h1>
            </div>
            <div className='BlogAuthor text-center mb-8 border-y-2 border-spacing-6 py-2 my-1'>
                <h1 className='inline text-blue-700 font-semibold mr-6'>{post.name}</h1>
                <span className='text-slate-700 font-normal'>
                    {post.createdAt
                        ? format(post.createdAt, 'MMMM d, yyyy') // Format date
                        : 'No date available'}
                </span>
            </div>
            <div className='BlogDescription mb-4  text-slate-800 font-serif' >{post.description}</div>
            <div className='BlogMessage text-slate-800 font-serif'>{post.message}</div>
        </div>
       </div>
    );
}

export default SingleBlog;
