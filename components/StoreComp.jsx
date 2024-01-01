import React from "react";

const StoreComp = ({ country, stores }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Store Information</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-lg font-semibold mb-2">Country: {country}</p>
        <p className="text-lg font-semibold mb-2">Stores:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="bg-white p-4 rounded-md shadow-md">
              <img src={store.logo} alt={`${store.name} Logo`} className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-bold mb-2">{store.name}</p>
              <p className="text-sm mb-4">{store.address}</p>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500">
                  {String.fromCharCode(9733).repeat(Math.floor(store.rating))}
                </span>
                <span className="text-gray-500">
                  {String.fromCharCode(9734).repeat(5 - Math.floor(store.rating))}
                </span>
              </div>
              <a
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                Visit Store
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Add some animations */}
      <div className="animate-bounce text-center text-gray-500">
        Scroll down for more information
      </div>
    </div>
  );
};

export default StoreComp;
