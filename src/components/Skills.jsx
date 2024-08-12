import React from "react";

// React icons
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiSkills className="text-2xl text-cyan-400">skill 1</GiSkills>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiSkills className="text-2xl">skill 2</GiSkills>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiSkills className="text-2xl text-green-500">skill 3</GiSkills>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiSkills className="text-2xl text-pink-500">skill 4</GiSkills>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiSkills className="text-2xl text-sky-700">skill 5</GiSkills>
        </div>
      </div>
    </div>
  );
};

export default Skills;
