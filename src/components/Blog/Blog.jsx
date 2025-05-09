import React from 'react';

const Blog = ({blog}) => {
    const {cover,author_img,author,posted_date,reading_time,title} = blog;
    console.log(blog);
    return (
        <div>
            {/* Div For one post container */}
          <div>
            <div>
                <img className=' w-full h-full object-cover rounded-lg' src={cover} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                {/* div for autohor data */}
                <div className='flex justify-center items-center gap-6 mt-8'>
                    <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                    <div>
                        <h2 className='font-exo font-bold text-2xl mb-1'>{author}</h2>
                        <p className='font-exo font-semibold text-[#111111]/[0.6]'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='font-exo font-medium text-xl text-[#111111]/[0.6]'>{reading_time} min read</p>
                </div>
            </div>
            <div>
                {/* div for details data */}
                <h2 className='font-exo font-bold text-[40px] py-4'>{title}</h2>
            </div>
          </div>  
        </div>
    );
};

export default Blog;