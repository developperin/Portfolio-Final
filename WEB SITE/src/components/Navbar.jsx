import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around">
                <img src="images/1.png" alt="" className='w-20 text-lg font-semibold flex items-center ' />
                <ul className="flex gap-[20px]  items-center text-lg">
                    <li className='tracking-widest'><Link to='/'>Home</Link></li>
                    {/* <li className='tracking-widest'><Link to='/about'>About</Link></li> */}
                    <li className='tracking-widest'><Link to='/skill'>Skills</Link></li>
                    <li className='tracking-widest'><Link to='/connect'>Connect</Link></li>
                    <li className='tracking-widest'><Link to='/github'>GitHub</Link></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar
