import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Blogs = ({handlePrice}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className="text-5xl">Blogs : {blogs.length}</h1>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-xl">Available Players</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
    <div className="join join-vertical lg:join-horizontal">
  <button className="btn join-item">Button</button>
  <button className="btn join-item">Button</button>
</div>

    </div>

  </div>
</div>

               <div className="grid md:grid-cols-3 mx-10 my-4 gap-4">
               {
                    blogs.map(blog=> <Blog key={blog.playerId} blog={blog} handlePrice={handlePrice} ></Blog> )
                }
               </div>
        </div>
    );
};

export default Blogs;