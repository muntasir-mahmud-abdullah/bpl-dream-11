import React from 'react';
import bannerbg from '../assets/bg-shadow.png'
import bannerimg from '../assets/banner-main.png'
const Banner = ({handleCredit}) => {
    const initalCredit = 6000000;
    return (

  <div className="max-w-screen-xl hero-overlay mx-auto rounded-lg hero min-h-screen"   style={{
    backgroundImage: `url(${bannerbg})`,
      }}>
  <div className="text-center">
    <div className="text-center flex flex-col justify-center items-center space-y-4">
        <img src={bannerimg} alt="" />
      <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={()=>handleCredit(initalCredit)} className="btn btn-primary w-1/5 mx-auto">Claim Free Credit</button>
    </div>
  </div>
  </div>
    );
};

export default Banner;