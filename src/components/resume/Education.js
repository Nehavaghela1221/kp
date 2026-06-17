import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech In IT"
            subTitle="Silver Oak University"
            result="9.24"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Panch Tirth Vidyalay"
            subTitle="HSC"
            result="84%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Shajanand Vidhyalay"
            subTitle=" Secondary School"
            result="84%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
       <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
  <ResumeCard
    title="MERN Stack Developer"
    subTitle="Tops Technologies"
    result="Ahmedabad"
    des="Completed intensive training in the MERN stack, building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in responsive web development, REST APIs, and database management."
  />

  <ResumeCard
    title="Web Developer & Freelancer"
    subTitle="Developer Team"
    result="Ahmedabad"
    des="Developed and maintained modern, responsive websites for clients. Worked with React.js, JavaScript, HTML, CSS, and Tailwind CSS while collaborating on real-world projects, focusing on performance, user experience, and client requirements."
  />
</div>
      </div>
    </motion.div>
  );
};

export default Education;
