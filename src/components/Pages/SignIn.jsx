import React, { useState } from 'react'
import { auth, googleProvider, signInWithPopup } from '../../firebase/firebase.js';
// import { signInWithEmailAndPassword } from 'firebase/auth';
function SignIn() {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('User signed in:', user);
            // Handle the user info or redirect
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
            // Handle the error
        }
    };
    return (
        <div className='bg-white flex justify-center gap-4 h-11/12 my-20 items-center flex-col'>
            <h2 className='text-5xl font-medium text-blue-400'>Sign In</h2>
            {/* {error && <p className='text-red-500 text-lg'>{error}</p>}
            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
                <input type="email"
                    placeholder='Enter Email'
                    value={email}
                    className='bg-blue-400 focus:bg-blue-200 outline-none w-80 focus:text-blue-800 text-slate-800 my-1 px-4 py-2 rounded-full '
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder='Enter Password'
                    value={password}
                    className='bg-blue-400 focus:bg-blue-200 outline-none w-80 focus:text-blue-800 text-white my-1 px-4 py-2 rounded-full '
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-700' type="submit">Sign In</button>
            </form> */}

            <div>
                <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white p-2 rounded">
                    Sign In with Google
                </button>
            </div>
        </div>
    )
}

export default SignIn