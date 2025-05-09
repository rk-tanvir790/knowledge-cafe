import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogPromiss}) => {
    const blogs = use(blogPromiss);
    console.log(blogs);

    return (
        <div>
          {
            blogs.map(blog => <Blog blog={blog}></Blog>)
          }  
        </div>
    );
};

export default Blogs;