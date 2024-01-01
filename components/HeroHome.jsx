import React, { useEffect, useState } from "react";
import WelcomePopup from "./POPUP/WelcomePopup";
import { useSelector } from "react-redux";

let countriesDemo = [
  {
    id: 1,
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    type: 'origin'
  },
  {
    id: 2,
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    type: 'origin'
  },
  {
    id: 3,
    name: "UK",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    type: 'origin'
  }
]
let languageDemo = [
  {
    id: 1,
    name: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    type: 'lang'
  },
  {
    id: 2,
    name: "Hindi",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    type: 'lang'
  },
  {
    id: 3,
    name: "UK",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    type: 'lang'
  }
]
const HeroHome = () => {
  let language = useSelector((state) => state.user.language);
  let location = useSelector((state) => state.user.location);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedLocation = JSON.parse(localStorage.getItem('location'));
    const storedLanguage = JSON.parse(localStorage.getItem('language'));

    if (!storedLocation && !location) {
      setShowPopup(true);
    } else if (!storedLanguage && !language) {
      setShowPopup(true);
    }
  }, [location, language]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Care For Clean India E-waste & Plastic waste Management Program{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Locator</span>
            </h1>
            {showPopup && (
              <WelcomePopup data={location ? languageDemo : countriesDemo} />
            )}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Welcome to the E-Waste Facility Locator Website! Our mission is to promote responsible e-waste disposal and environmental awareness. With a stunning header, locator tool, educational pop-ups, rewards, and clear calls to action, we offer a seamless user experience. Join us in making a difference today! Visit our E-Waste Locator to find the nearest e-waste stores near you. When you recycle your items with us, you&apos;ll earn rewards for your contribution towards a greener environment!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white p-3 bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="prediction">Start Recycling</a>
                </div>
                <div>
                  <a className="btn p-3 text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
