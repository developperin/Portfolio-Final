import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <>
            <div className="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-gray-900 text-white w-full mb-6 shadow-lg rounded-xl mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full flex justify-center">
                            <div className="relative">
                                <img src='images/1.png' alt="User Profile" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                            </div>
                        </div>
                        <div className="w-full text-center mt-20">
                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-white">6</span>
                                    <span className="text-sm text-white">Posts</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-white">19</span>
                                    <span className="text-sm text-white">Followers</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="text-2xl text-white font-bold leading-normal mb-1">Nirav Mathukiya</h3>
                        <div className="text-xs mt-0 mb-2 text-white font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-white opacity-75"></i>Surat , Gujarat
                        </div>
                        <div className='rounded text-lg mt-10 p-2 border-white border-2 hover:bg-green-400'>
                            <Link to="https://github.com/developperin" >Github</Link>
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="font-light leading-relaxed text-white mb-4">A web developer with exceptional problem-solving skills adeptly tackles complex challenges in website development, efficiently debugging code, resolving compatibility issues, and optimizing performance to ensure seamless functionality and user experience. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
