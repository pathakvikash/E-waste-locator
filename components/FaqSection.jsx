import { useState } from "react";
import { IoMdBulb, IoMdHelpCircle } from "react-icons/io";

const faqItems = [
  {
    question: "What is E-waste?",
    answer:
      "E-waste, short for electronic waste, refers to discarded electronic devices and equipment. It includes items like old computers, smartphones, tablets, televisions, printers, and more.",
  },
  {
    question: "What is the proper way to dispose E-waste?",
    answer:
      "To dispose of e-waste properly, take it to certified e-waste recycling centers or collection events. Don't throw it in regular trash. Recycling facilities can safely extract valuable materials and dispose of hazardous substances. Additionally, consider donating or reselling still-functional electronics to reduce waste.",
  },
  {
    question: "How much time is taken to recycle E-waste?",
    answer:
      "The time required to recycle e-waste varies based on factors like the type and quantity of items, recycling methods, and facility capacity. On average, it can take several weeks to process and recycle e-waste, but more complex or large-scale operations may take longer. Efficient recycling helps recover valuable materials and reduce environmental impact.",
  },
  {
    question: "Which precious metals we can extract from E-waste?",
    answer:
      "The precious metals that can be extracted from e-waste include gold, silver, platinum, palladium, and copper. These metals are commonly found in electronic components like circuit boards and connectors.",
  },
  {
    question: "How much wealth can we generate from E-waste approximately?",
    answer:
      "The wealth generated from e-waste recycling can vary widely based on factors like the quantity and quality of materials recovered, market prices, and recycling efficiency. However, it's estimated that globally, e-waste contains billions of dollars' worth of precious metals and recyclable materials, making it a valuable resource for both the economy and the environment.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white w-full p-8">
      <div className="faq-main">
        <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <div className="line h-2 w-1/2 bg-blue-600 mx-auto my-10"></div>
        {faqItems.map((item, index) => (
          <div className="faq-item my-6" key={index}>
            <div
              className={`faq-question bg-gray-100 p-4 flex gap-3 items-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white break-words`}
              onClick={() => handleToggle(index)}>
              <IoMdHelpCircle className={`hover:text-white transition-all duration-300`} />
              {item.question}
            </div>
            <div
              className={`faq-answer max-h-${
                activeIndex === index ? "1000" : "0"
              } overflow-hidden p-4 transition-all flex gap-2 items-center duration-200 border-2 border-black rounded-md ${
                activeIndex === index ? "block" : "hidden"
              } bg-white max-w-screen-sm`}>
              <div className="flex items-center">
                <IoMdBulb className="transition-all text-blue-600 w-6 h-6" />
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
