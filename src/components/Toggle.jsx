import React from "react";

const Toggle = ({ handleAvailable,tab,selected }) => {
  return (
    <div className="my-4 max-w-screen-xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl"> {tab}</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="join join-vertical lg:join-horizontal">
              <button
                onClick={() => handleAvailable(true)}
                className="btn join-item"
              >
                Available
              </button>
              <button
                onClick={() => handleAvailable(false)}
                className="btn join-item"
              >
                Selected({selected.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
