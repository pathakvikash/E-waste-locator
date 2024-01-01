import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import CannotRecycleCard from "../components/CannotRecycleCard";
import Card from "../components/Card";
import FactCard from "../components/FactCard";
import FaqSection from "../components/FaqSection";
import HeroHome from "../components/HeroHome";
import Newsletter from "../components/NewsLetter";
import Testimonials from "../components/Testimonial";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeroHome />
      <CannotRecycleCard />
      <div className="flex">
        <div className="flex flex-col ">
        <Card />
        <div className="flex flex-col p-12">
          <h2 className="text-3xl font-bold">Education</h2>
          <hr className="my-2 w-1/2" />
          <p>
            Our project is an innovative E-Waste Facility Locator Website designed to bridge the gap
            between consumers and e-waste recycling facilities. This user-friendly platform not only
            provides the location of the nearest e-waste collection and recycling facility but also
            educates users about the harmful components of their e-waste and their potential
            environmental and health impacts if not disposed of correctly
          </p>
          <div>
            Explore our extensive &quot;Education&quot; section to gain insights into responsible
            e-waste disposal. We provide comprehensive resources, including articles and guides, to
            help you understand the environmental impact of e-waste and the importance of recycling.
          </div>
          </div>
        </div>
          <EwasteInfoComponent />
      </div>
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold p-3">Discover Nearest E-Waste Facilities India</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15483577.547145078!2d83.96126292770049!3d18.656352441991164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE-waste%20collection%20and%20recycling%20facility%20in%20India!5e0!3m2!1sen!2sin!4v1694891353768!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <FactCard />
        <div className="flex flex-col items-center my-9 space-y-4">
          <FaqSection />
        </div>
      </div>
      <Testimonials />
      <Newsletter />
    </>
  );
}

const EwasteInfoComponent = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Types of Unrecyclable E-waste</h2>

      <ul className="list-disc pl-6">
        <li className="mb-4">
          <strong>Lithium-containing e-waste:</strong> This includes batteries.
        </li>
        <li className="mb-4">
          <strong>Appliances containing freon:</strong> This includes refrigerators, dehumidifiers, and air conditioners.
        </li>
        <li className="mb-4">
          <strong>Electronics containing mercury or lead:</strong> This includes LCD televisions and monitors, and old TVs (pre-1991). Old cathode ray tube televisions also contain lead.
        </li>
        <li className="mb-4">
          <strong>Damaged LCD screens:</strong> If the mercury lamp is separated from the screen, it must be disposed of properly.
        </li>
        <li className="mb-4">
          <strong>Non-decontaminated medical equipment:</strong> Recycling centers often don't accept microwave ovens, even though these appliances have a ton of worthy spare parts.
        </li>
      </ul>

      <p className="mt-6">
        <strong className="block mb-2">Adverse Impacts on Human Health:</strong>
        E-waste recycling activities may have several adverse impacts on human health. Children and pregnant women are particularly vulnerable.
      </p>
    </div>
  );
}