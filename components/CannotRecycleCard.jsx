const items = [
  {
    name: "CRT",
    description:
      "Cathode Ray Tube (CRT) televisions and computer monitors are obsolete and cannot be reused due to lack of demand and the presence of lead.",
    image: "https://images.wisegeek.com/television-tube.jpg",
  },
  {
    name: "LCD",
    description:
      "Liquid Crystal Displays (LCD screens) can be reused if intact, but if damaged or the mercury lamp is separated, they must be properly disposed of.",
    image: "https://pbblogassets.s3.amazonaws.com/uploads/2020/09/28095219/Liquid-Crystal.jpg",
  },
  {
    name: "PVC",
    description:
      "PVC, found in electronics as wire covering and tubing, is recognized as a carcinogen and should not be recycled.",
    image:
      "https://www.shanpowercable.com/photo/pl12363064-pvc_jacket_insulated_electrical_wire_outdoor_10sq_mm_16sq_mm_environmental_protection.jpg",
  }
];

const CannotRecycleCard = () => {
  const renderItems = () => {
    return items.map((item, index) => (
      <div key={index} className="mb-4 lg:w-1/3 lg:flex lg:flex-col lg:items-center">
        <div className="w-16 h-16 mb-2 lg:mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center md:w-[70%]">
          <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="rounded shadow-lg p-4">
      <div className="bg-white flex items-center flex-col p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What Can&apos;t Be Recycled?</h2>
        <div className="lg:flex lg:flex-row lg:flex-wrap">{renderItems()}</div>
      </div>
    </div>
  );
};

export default CannotRecycleCard;
