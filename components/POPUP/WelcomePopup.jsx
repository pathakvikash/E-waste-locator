import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setLanguage } from "../../redux/actions/userSlice";

const WelcomePopup = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelection = (item) => {
    setSelectedItem(item);
  };

  const handleContinueClicked = (event) => {
    event.preventDefault();

    if (selectedItem) {
      if (selectedItem.type === 'origin') {
        dispatch(setLocation(selectedItem));
      } else {
        dispatch(setLanguage(selectedItem));
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Select {data[0].type === 'origin' ? 'Country' : 'Language'}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelection(item)}
              className={`flex flex-col items-center p-4 border border-gray-200 rounded ${selectedItem === item ? 'bg-blue-200' : ''
                }`}
            >
              <img
                src={item.flag}
                alt={item.name}
                className="w-16 h-16 mb-2 rounded-full"
              />
              <p className="text-gray-700">{item.name}</p>

            </div>
          ))}
        </div>

        {selectedItem && (
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleContinueClicked}
          >
            Continue
          </a>
        )}

        <p className="p-3">
          <b>Note:</b> You can change{' '}
          {data[0].type === 'lang' ? 'language' : 'country'} from profile -&gt;{' '}
          {data[0].type === 'lang' ? 'language' : 'country'}
        </p>
      </div>
    </div>
  );
};

export default WelcomePopup;