import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Blogs = ({handleSelected}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='max-w-screen-xl mx-auto pb-60'>

               <div className="grid md:grid-cols-3 mx-10 my-4 gap-4">
               {
                    blogs.map(blog=> <Blog key={blog.playerId} handleSelected={handleSelected} blog={blog}  ></Blog> )
                }
               </div>
        </div>
    );
};

export default Blogs;