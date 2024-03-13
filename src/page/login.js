import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

const registrationForm = () => {
    return (
        <div className=' md:w-screen h-screen flex flex-col md:flex-row mt-[6rem]'>
            <div className=' pl-10 w-[50%]  flex flex-col items-center justify-center gap-20'>
                <div className='rotate-25'>
                    <FaLocationArrow size={64} rotate={90} color="" />
                </div>
                <p className='text-xl font-semibold'>
                    Join Us
                </p>
                <p className=''>
                    Register for your domain.
                </p>
                <button className='px-4 py-2 rounded rounded-xl text-black bg-white hover bg-gray-900'>
                    About Us
                </button>
            </div>
            <div className=' p-10 w-[40%] grid items-center'>
                <div className="shadow flex items-center flex-col gap-10 bg-blue-200 p-5 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-l-[30%] rounded ">
                    <p className='text-2xl font-bold'>
                        Login Here
                    </p>
                    <div>
                        <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Your email address"
                            name="email"
                            className=' rounded focus:bg-gray-200 focus:text-black  focus:border border-1'
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            autoComplete="password"
                            placeholder="Your password"
                            name="password"
                            className=' rounded focus:bg-gray-200 focus:text-black  focus:border border-1'

                        />
                    </div>
                    <div className='flex flex-col self-center justify-between '>
                        <Link to='/login' className='text-blue-700 font-semibold  hover:underline cursor-pointer py-4 ' > Already registered ?
                        </Link>
                        <Link className='self-right bg-gray-950 rounded rounded-full text-white font-bold text-lg py-4 px-8 shadow'>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registrationForm
