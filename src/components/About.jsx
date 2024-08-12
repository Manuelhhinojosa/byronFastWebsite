import React from "react";

// libraries
import { motion } from "framer-motion";
//Images
import aboutImg from "../assets/images/aboutImg.jpeg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opcity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="aboutImg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py6 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo
              similique, earum impedit amet temporibus vero, doloribus, delectus
              vel alias magni sit nostrum tenetur perferendis blanditiis
              necessitatibus saepe et quisquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quae hic atque quas reprehenderit
              reiciendis veritatis vero quaerat magni, excepturi dolores,
              adipisci officia velit expedita repellat. Blanditiis nisi quis
              aliquam distinctio? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, qui? Cupiditate rerum doloremque eius
              molestias dolore nostrum, magni odio quisquam consequatur.
              Impedit, excepturi? Repellendus consectetur est maxime numquam!
              Animi, labore.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
