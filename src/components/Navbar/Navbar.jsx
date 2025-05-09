import React from 'react';
import navIamge from '../../assets/profile.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto pt-[50px] pb-[32px] border-b-1 border-b-[#111111]/[0.15]'>
            {/* Left side  */}
            <div className=''>
                <h2 className='font-exo font-bold text-[40px]'>Knowledge Cafe</h2>
            </div>
            <div>
                <img className='h-[60] w-[60]' src={navIamge} alt="" />
            </div>
        </div>
    );
};

export default Navbar;