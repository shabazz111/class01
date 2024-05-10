import React from "react";

const Home = () => {
  return (
    <div className="flex w-full py-2 flex-col h-[44rem] justify-center items-center gap-5">
      <span
        className="font-bold text-3xl w-[96vw] text-center glow-text"
        style={{
          backgroundImage: "linear-gradient(to right, #00f, #0ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Fusing Ideas , Crafting Excellence.
      </span>
      <span
        className="text-center mt-5 w-[43rem] mx-auto"
        style={{
          background:
            "-webkit-linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Forging Excellence in Every Byte. A commitment to precision and
        excellence, delivering tailored solutions, where expertise meets
        innovation, and possibilities unfold. Precision, professionalism, and
        progress...
      </span>

      <a href="" className="mt-10 bg-white">
        <span className="p-4  text-blue-500">Let's Ignite</span>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  );
};

export default Home;
