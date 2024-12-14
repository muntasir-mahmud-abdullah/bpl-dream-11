import React from "react";

const Player = ({ player,handleDelete }) => {
  const { playerId, image, name, role, biddingPrice } = player;
  return (
    <div className="flex justify-between border-2 p-4">
      <div className="flex gap-4">
        <img className="w-16 rounded-xl" src={image} alt="" />
        <div className="flex flex-col">
          <h6 className="text-lg font-bold">{name}</h6>
          <p className="text-md">{role}</p>
          <p className="text-sm text-gray-500">${biddingPrice}</p>
        </div>
      </div>

      <button onClick={()=>handleDelete(playerId)} className="btn">delete</button>
    </div>
  );
};

export default Player;
