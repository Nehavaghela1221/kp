import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFive,projectSix,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Devinapura Pragati Mandal – Community Management Website"
          des=" Developed a community website for Devinapura Pragati Mandal in Ahmedabad. The platform includes a member directory, announcements section, gallery updates, and admin management features. The website helps community members access important information and stay connected."
          src={projectOne}
        />
        <ProjectsCard
          title="JKS International – Bearings & Precision Component"
          des=" Developed a corporate website for JKS International, a manufacturing company based in Ahmedabad specializing in self-lubricating bearings, bimetal bushes, and precision components. The website showcases company products, technical information, and contact details to help industrial clients easily explore bearing solutions and request quotations."
          src={projectTwo}
        />
        <ProjectsCard
          title="Pranam Enterprise – Plywood & Building Materials Business"
          des=" Developed a business website for Pranam Enterprise, a supplier of plywood, MDF boards, laminates, and particle boards in Ahmedabad. The website showcases company information, product portfolio, and material specifications to help customers explore available building materials and contact the company for inquiries."
          src={projectThree}
        />
        <ProjectsCard
          title="Travel Story – Travel Booking Website"
          des=" Developed a modern travel website interface that showcases popular tourist destinations, travel packages, and booking information. The platform highlights beautiful travel locations with pricing, tour details, and promotional content to inspire users to plan their trips."
          src={projectFour}
        />
        <ProjectsCard
          title="Restoran – Restaurant Website UI Design
Website"
          des="Developed a modern restaurant website interface designed to showcase food menus, services, and table booking features. The website includes sections like home, about, services, menu, and contact, providing an attractive and responsive layout for restaurant businesses to promote their food and allow customers to book tables online."
          src={projectFive}
        />
        <ProjectsCard
          title="Simplifying student feedback with intuitive QR code"
          des=" QR code-based student feedback system
Revolutionize how students provide feedback at college with our QR code-based system. Students can simply scan QR codes placed around campus to share their thoughts on courses, facilities, and campus life effortlessly. Our intuitive platform streamlines the feedback process, allowing colleges to gather valuable insights in real-time and make informed decisions to enhance the overall student experience. Say goodbye to cumbersome forms and hello to a more accessible and effective feedback system with us."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects