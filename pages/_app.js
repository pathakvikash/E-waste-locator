import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { store } from "../redux/store";
import "../styles/globals.css";

export const metadata = {
  title: "E-waste-Locator",
  description: "Find your nearest e-waste collection point",
  keywords: "e-waste, waste, locator, collection, point",
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* <IPage/> */}
    </Provider>
  );
}

export default MyApp;

const IPage = () => {
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
          // Do something with the location data
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Your Next.js page content */}
      I page !
      {/* ... */}
    </div>
  );
};