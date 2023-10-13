const FactCard = () => {
  return (
    <div className="">
      <div className="bg-white flex flex-col items-center justify-center rounded shadow-lg p-4">
        <div className="flex flex-col space-y-6 items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Did You Know?</h2>

          <div className="flex">
            <div className="fact flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-700">Fact 1</h3>
              <p className="text-gray-600 max-w-[60%] p-3 ">
                Around 10 million tonnes of electronic waste is produced each year in 28 EU
                countries plus Norway and Switzerland.
              </p>
            </div>

            <div className="fact flex flex-col items-center ">
              <h3 className="text-lg font-semibold text-gray-700">Fact 2</h3>
              <p className="text-gray-600 max-w-[60%] p-3 ">
                A single mercury ampoule from a coffee maker can contaminate a small lake so you
                cannot fish anymore.
              </p>
            </div>

            <div className="fact flex flex-col items-center ">
              <h3 className="text-lg font-semibold text-gray-700">Fact 3</h3>
              <p className="text-gray-600 max-w-[60%] p-3 ">
                The total weight of electronic waste generated in 2020 was equivalent to 350 cruise
                ships the size of the Queen Mary 2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactCard;
