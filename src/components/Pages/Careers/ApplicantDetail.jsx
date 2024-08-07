import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";

import { format } from 'date-fns';


function ApplicantDetail() {
    const [applicant, setApplicant] = useState(null);
    const { applicantId } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'applicants', applicantId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();

                    console.log('CreatedAt:', createdAt);

                    setApplicant({
                        id: docSnap.id,
                        ...data,
                        createdAt
                    });
                } else {
                    console.log("No such Data!");
                }
            } catch (error) {
                console.log("Error fetching Data:", error);
            }
        };

        fetchBlog();
    }, [applicantId]);

    if (!applicant) {
        return (
            <div >
                <div className="flex items-center justify-center h-auto">
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                        </div>
                    </div>
                </div>
            </div>);
    }
    return (
        <div>
            <div className="bg-white h-auto py-8 px-12 ">
                <div className=' rounded-xl'>
                    <div className='ApplicantPosition text-5xl font-semibold mb-4 text-center'>
                        <h1>{applicant.position}</h1>
                    </div>
                    <div className=' text-center mb-8 border-y-2 border-spacing-6 py-2 my-1'>
                        <h1 className='inline text-blue-700 font-semibold mr-6'>{applicant.name}</h1>
                        <span className='text-slate-700 font-normal'>
                            {post.createdAt
                                ? format(post.createdAt, 'MMMM d, yyyy') // Format date
                                : 'No date available'}
                        </span>
                    </div>
                    <div className=' mb-4  text-slate-800 font-serif' >{applicant.email}</div>
                    <div className=' text-slate-800 font-serif'>{applicant.position}</div>
                    <div className=' text-slate-800 font-serif'>{applicant.relocate}</div>
                    <div className=' text-slate-800 font-serif'>{applicant.experience}</div>
                    <div className=' text-slate-800 font-serif'>{applicant.resume}</div>

                </div>
            </div>
        </div>
    )
}

export default ApplicantDetail