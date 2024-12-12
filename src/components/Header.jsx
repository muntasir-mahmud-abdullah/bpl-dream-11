import logo from "../assets/logo.png";
import coin from "../assets/dollar.png";
const Header = ({ count }) => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Fixture</a>
      </li>
      <li>
        <a>Team </a>
      </li>
      <li>
        <a>Schedules</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="">
          <p className="btn flex items-center justify-center">
            {" "}
            {count} Coin <img className="w-5" src={coin} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
