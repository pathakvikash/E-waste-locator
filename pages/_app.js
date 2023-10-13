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
    </Provider>
  );
}

export default MyApp;
