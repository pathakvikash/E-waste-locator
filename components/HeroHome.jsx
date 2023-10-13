import React, { useState } from "react";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out">
              E-Waste{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Locator
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Welcome to the E-Waste Facility Locator Website! Our mission is to promote
                responsible e-waste disposal and environmental awareness. With a stunning header,
                locator tool, educational pop-ups, rewards, and clear calls to action, we offer a
                seamless user experience. Join us in making a difference today! Visit our E-Waste
                Locator to find the nearest e-waste stores near you. When you recycle your items
                with us, you&#39;ll earn rewards for your contribution towards a greener
                environment!
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300">
                <div>
                  <a
                    className="btn text-white p-3 bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="prediction">
                    Start Recycling
                  </a>
                </div>
                <div>
                  <a
                    className="btn p-3 text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0">
                    Learn more
                  </a>
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
