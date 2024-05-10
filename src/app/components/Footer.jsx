import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex-col p-5 bg-gray-600 justify-center items-center">
      <div className="flex justify-center gap-6">
        <a
          className="hover:underline hover:text-blue-500 cursor-pointer transition-all ease-in duration-100"
          href=""
        >
          Whattsapp
        </a>
        <a className="hover:underline hover:text-blue-500 cursor-pointer transition-all ease-in duration-100">
          Email
        </a>
        <a className="hover:underline hover:text-blue-500 cursor-pointer transition-all ease-in duration-100">
          Instagram
        </a>
      </div>
      <div className="flex justify-center items-center item-gray-300">
        Copyright @ 2024 Shaik Shabazz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
