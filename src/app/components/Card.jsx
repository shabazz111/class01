import React from "react";

const Card = () => {
  return (
    <section className="w-full flex justify-center items-center p-10">
      <div className="relative h-[40rem] max-w-[28rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white text-center text-gray-700">
        <div className="absolute w-full h-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-gray-700">
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <a href="" className="relative p-6 px-6 py-14">
          <h2 className="mb-6 font-sans text-4xl font-medium text-white flex justify-center">
            Click here to Explore all 21 live projects
          </h2>
          <h5 className="block mb-4 font-sans text-4xl font-semibold text-white">
            Shaik Shabazz
          </h5>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-gray-600 dark:text-gray-300">SK</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Card;
