import React from "react";

const Toggle = ({ handleAvailable,tab }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl"> {tab} Players</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="join join-vertical lg:join-horizontal">
              <button
                onClick={() => handleAvailable("available")}
                className="btn join-item"
              >
                Available
              </button>
              <button
                onClick={() => handleAvailable("")}
                className="btn join-item"
              >
                Selected()
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
