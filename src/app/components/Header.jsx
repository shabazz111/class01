import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex w-[60rem] justify-between items-center">
        <span className="text-3xl text-white">Shaik Shabazz</span>
        <div className="flex w-[29rem] xl:flex hidden h-[1px] roundede-full justify-center items-center bg-[#f5f5dc]">
          <span className="h-3 w-6 rounded-full bg-[#f5f5dc]"></span>
        </div>
        <div className="hidden xl:flex flex gap-4 items-center text-white">
          Contact
          <a href="">
            <img
              className="w-8 h-8 rounded-full instagram-icon"
              src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1464538-1239449.png?f=webp&w=512"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
