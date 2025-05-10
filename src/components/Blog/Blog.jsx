import React from 'react';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog,handelBookmark,handleMarkAsRead}) => {
    const {cover,author_img,author,posted_date,reading_time,title} = blog;
    return (
        <div>
            {/* Div For one post container */}
          <div className='border-b border-[#111111]/[0.1] pt-10'>
            <div>
                <img className=' w-full h-full object-cover rounded-lg' src={cover} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                {/* div for autohor data */}
                <div className='flex justify-center items-center gap-6 mt-8'>
                    <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                    <div>
                        <h2 className='font-exo font-bold text-lg md:text-2xl mb-1'>{author}</h2>
                        <p className='font-exo font-semibold text-[#111111]/[0.6]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='font-exo font-medium text-xl text-[#111111]/[0.6]'>{reading_time} min read</p>
                    <button onClick={()=>handelBookmark(blog,blog.id)}><FaRegBookmark size={24} className='text-[#111111]/[0.6] cursor-pointer' /></button>
                </div>
            </div>
            <div>
                {/* div for details data */}
                <h2 className='font-exo font-bold text-[28px] md:text-[40px] py-4'>{title}</h2>
                <div className="flex gap-4 font-exo font-medium text-xl text-[#111111]/[0.6]">
                    {
                        blog.hashtags.map((hasTag,i) => <p key={i}>#{hasTag}</p>)
                    }
                </div>
                <div className='pb-9'>
                    <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} className='pt-5 font-exo font-semibold text-xl text-[#6047EC] border-b border-[#6047EC]'>Mark as read</button>
                </div>
            </div>
          </div>  
        </div>
    );
};

export default Blog;