
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
    },
];
const Slider = () => {
    return (
        <div className="slider flex">
            {items.map((item, index) => (
                <div key={index} className="card shadow-lg">
                    <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold">{item.name}</h2>
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider