import React from "react";
import footerlogo from "../assets/logo-footer.png";
import bannerbg from "../assets/bg-shadow.png";
const Footer = () => {
  return (
    <div className="bg-[#06091A] pt-60 ">
      <div className="flex justify-center mb-4">
        <img src={footerlogo} alt="" />
      </div>
      <footer className="max-w-screen-xl flex justify-between mx-auto footer text-base-content pb-10 border-b-2 border-gray-700 mb-10 relative">
        <div className="w-full mx-auto p-5 border-2 rounded-xl border-white bottom-[22rem] left-[0rem] z-10  absolute">
          <div
            className="flex flex-col gap-4 w-full items-center bg-gray-50 justify-center p-32 rounded-xl "
            style={{
              backgroundImage: `url(${bannerbg})`,
            }}
          >
            <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-xl text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex gap-4">
              <input
                className="input rounded-lg input-bordered"
                placeholder="Enter Your Email"
              />
              <button className=" btn btn-subscribe rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <nav>
          <h6 className="footer-title text-white font-bold">About Us</h6>
            <p className="text-sm text-gray-500 w-60">We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>
        <nav>
          <h6 className="footer-title text-white font-bold">Quick Links</h6>
          <a className="link link-hover text-gray-500">Home</a>
          <a className="link link-hover text-gray-500">Services</a>
          <a className="link link-hover text-gray-500">About</a>
          <a className="link link-hover text-gray-500">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title text-white font-bold">Subscribe</h6>
          <fieldset className="form-control w-80">
              <p className="text-sm text-gray-500">Subscribe to our newsletter for the latest updates.</p>
            
            <div className="join mt-4 ">
              <input
                type="text"
                placeholder="Enter email address"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="text-center text-gray-500 pb-10">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
