import React from "react";

// images
import profilePic from "../assets/images/profilePic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Byron Fast
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Content Creator
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              nobis libero harum eos vel enim voluptas possimus dolores dolore
              aperiam at dolorem mollitia ipsam dicta in ut tenetur consectetur
              non.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilePic} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
