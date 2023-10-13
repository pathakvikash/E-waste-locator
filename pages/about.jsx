import React from "react";
import { FaRecycle } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";
import { TiWeatherSunny } from "react-icons/ti";

const aboutData = [
  {
    iconClass: <TiWeatherSunny />,
    title: "WHO E-WASTE FACILITY ARE!",
    subTitle: "New Age Recyclers",
    description:
      "We are a new age techno-commercial E-waste recycling expert, enabling the environmental value-chain for all.",
  },
  {
    iconClass: <GiPlantSeed />,
    title: "WHAT E-WASTE FACILITY DO!",
    subTitle: "Recycling Solutions",
    description: "All The Precious Materials Inside Your Device.",
  },
  {
    iconClass: <TiWeatherSunny />,
    title: "OUR GOAL",
    subTitle: "Environmental Sustainability",
    description:
      "We keep the environment first and bring in the purpose to address related issues and build a co-existing ecology.",
  },
];

const counterData = [
  {
    iconClass: "fa-house-chimney",
    num: "333,000",
    text: "E-waste Facility",
  },
  {
    iconClass: "fa-recycle",
    num: "22,000",
    text: "E-waste Recycled (Tons/Annum)",
  },
  {
    iconClass: "fa-business-time",
    num: "116,000",
    text: "People Hired",
  },
  {
    iconClass: "fa-percent",
    num: "100,000",
    text: "Environment Protection",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white w-full h-auto pt-24 pb-0 overflow-hidden">
      <div className="header flex justify-center items-center flex-col">
        <h3 className="font-bold text-black text-3xl mb-5">About E-Waste Facility</h3>
        <hr className="line h-2 w-48 bg-purple-600 mx-auto" />
      </div>
      <div className="content flex sm:flex-col lg:flex-row items-center mt-20">
        {aboutData.map((item, index) => (
          <div key={index} className="feature text-center flex flex-col items-center mx-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="135" viewBox="0 0 135 135">
              <circle cx="67.5" cy="67.5" r="62.5" fill="#7a60ff" />
              <circle cx="67.5" cy="32" r="10" fill="#fff" />
              <circle cx="102" cy="67.5" r="10" fill="#fff" />
              <circle cx="32" cy="67.5" r="10" fill="#fff" />
              <circle cx="67.5" cy="102" r="10" fill="#fff" />
            </svg>

            <h6 className="font-bold text-gray-500 hover:text-black pt-2">{item.title}</h6>
            <h4 className="font-bold hover:text-green-500">{item.subTitle}</h4>
            <p className="text-center px-24">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="counter flex sm:flex-col lg:flex-row gap-9 justify-center items-center mt-10">
        {counterData.map((item, index) => (
          <div
            key={index}
            className="container h-[250px] w-[250px] rounded-lg flex flex-col items-center bg-purple-600 hover:bg-white  hover:text-black  hover:border-0 transform hover:scale-125 transition duration-500">
            <i className={`fa-solid fa-${item.iconClass} text-white text-2xl text-center`} />
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="135" viewBox="0 0 135 135">
              <circle cx="67.5" cy="67.5" r="62.5" fill="#7a60ff" />
              <circle cx="67.5" cy="32" r="10" fill="#fff" />
              <circle cx="102" cy="67.5" r="10" fill="#fff" />
              <circle cx="32" cy="67.5" r="10" fill="#fff" />
              <circle cx="67.5" cy="102" r="10" fill="#fff" />
            </svg>
            <span className="num text-white font-semibold text-3xl flex items-center justify-center pt-3">
              {item.num}
            </span>
            <span className="text text-center text-black text-base font-semibold pb-2">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
