import React from "react";

const Blog = ({ blog, handlePrice }) => {
  const { name, country, battingType, bowlingType, biddingPrice, role, image } =
    blog;
  //   console.log(blog);
  return (
    <div className="card space-y-6  bg-base-100 w-96 shadow-xl p-4 border-2">
      <figure>
        <img className="w-full h-60 object-fill" src={image} alt="img" />
      </figure>
      <div className="">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{country}</div>
        </h2>
        <p>{battingType}</p>
        <p>{bowlingType}</p>
        <div className="flex justify-between my-2">
          <div className="badge badge-outline">{role}</div>
          <div className="badge badge-outline"> Price : ${biddingPrice}</div>
          </div>
        <div className="mt-2">
        <button onClick={()=>handlePrice(biddingPrice)} className="btn btn-sm">Choose Player</button>
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
