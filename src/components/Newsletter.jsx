import React from 'react';
import bannerbg from '../assets/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className="w-[1240px] mx-auto p-5 border-2 rounded-xl border-white bottom-[-45rem] left-[8rem] z-10  absolute">
                    <div className="flex flex-col gap-4 items-center bg-gray-50 justify-center p-32 rounded-xl "   style={{
                        backgroundImage: `url(${bannerbg})`,
                          }} >
            <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-xl text-gray-500">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-4">
  <input className="input rounded-lg input-bordered" placeholder="Enter Your Email" />
  <button className=" btn btn-subscribe rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500">Subscribe</button>
</div>
        </div>
        </div>

    );
};

export default Newsletter;