import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogPromiss,handelBookmark,handleMarkAsRead}) => {
    const blogs = use(blogPromiss);

    return (
        <div>
          {
            blogs.map(blog => <Blog 
              key={blog.id} 
              blog={blog} 
              handelBookmark={handelBookmark} 
              handleMarkAsRead={handleMarkAsRead}></Blog>)
          }  
        </div>
    );
};

export default Blogs;