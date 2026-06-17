import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I build modern, responsive, and user-friendly websites that help businesses establish a strong online presence and deliver seamless user experiences."
         
        />
        <Card
          title="UI/UX Design"
          des="I create intuitive and visually appealing interfaces that improve user engagement, enhance usability, and drive better customer satisfaction."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Social Media Management"
          des="I help brands grow their online presence through strategic content planning, profile optimization, audience engagement, and consistent branding."
          icon={<SiProgress />}
        />
        <Card
          title="Reels & Content Creation"
          des="I create engaging short-form video content and reels that capture attention, increase reach, and help businesses connect with their target audience."
          icon={<FaMobile />}
        />
        <Card
          title="Digital Marketing"
          des="I develop data-driven marketing strategies to boost brand awareness, generate leads, and improve conversion rates across digital platforms."
          icon={<SiAntdesign />}
        />
        <Card
          title="SEO & Website Optimization"
          des="I optimize website s for search engines and performance, helping businesses improve visibility, attract organic traffic, and achieve sustainable growth."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features