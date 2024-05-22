import React from 'react';
import { Link } from 'react-router-dom';

const downloadResume = () => {
    // Assuming resume.pdf is in the public directory
    const resumeUrl = 'images/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
};

const HomePage = () => {
    return (
        <div className='bg-black'>
            <div className="bg-black w-full shadow-md flex flex-col justify-center items-center p-10 ">
                <img src="images/1.png" className=" rounded-lg mb-4 w-64" />
                <h2 className="text-3xl text-center  text-white  font-bold mb-6">I do code and <br /> make content <span className=' bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>about it!</span></h2>
                <p className="text-slate-300  text-center mb-4 w-1/2">I am a seasoned full-stack software engineer with over
                    8 years of professional experience, specializing in backend development.
                    My expertise lies in crafting robust and scalable SaaS-based
                    architectures on the Amazon AWS platform.</p>
            </div>
            <div className='flex w-full justify-center gap-6 pb-14 '>
                <div className=' text-xl  border-2 bg-white text-black hover:text-white hover:bg-black rounded-full text-center p-4'>
                    <Link to="/Connect">Get in Touch</Link>
                </div>
                {/* <div onClick="https://github.com/developperin" className='text-xl  text-white border-2 rounded-full  hover:text-black hover:bg-white text-center p-4'>
                    <a download="images/resume.pdf" onClick="https://github.com/developperin" className='cursor-pointer'>Download CV</a>
                </div> */}
                <button
                    className='btn  px-10 py-4   hover:cursor-pointer transition-all ease-in-out text-xl  text-white border-2 rounded-full  hover:text-black hover:bg-white text-center p-4'
                    onClick={downloadResume}
                >
                    Resume
                </button>
            </div>
        </div>
    );
};


export default HomePage;
