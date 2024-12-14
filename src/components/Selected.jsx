import React from 'react';
import Player from './Player';
import Newsletter from './Newsletter';

const Selected = ({selected,handleAvailable, handleDelete}) => {
    // console.log(selected);

    return (
        <div className="max-w-screen-xl mx-auto my-4 pb-60">
        
        <div className="p-4 flex flex-col gap-4">
          {selected.map((player) => (
            <Player handleDelete={handleDelete} key={player.playerId} player={player}></Player>
          ))}
        </div>
        <button onClick={() => handleAvailable(true)} className='btn btn-outline'>Add Players</button>
      </div>
    );
};

export default Selected;