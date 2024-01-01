import { useState, useEffect } from "react";
import StoreComp from "../components/StoreComp";
const StorePage = () => {
    const [country, setCountry] = useState("");
    const [stores, setStores] = useState([]);
    const getCountryFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );
            const data = await response.json();
            return data.address.country;
        } catch (error) {
            console.error("Error getting country:", error.message);
            return null;
        }
    };

    const searchEWasteStores = async (country) => {
        try {
            const response = await fetch(`http://localhost:3001/stores`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error searching for e-waste stores:", error.message);
            return [];
        }
    };

    useEffect(() => {
        const getLocation = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = position.coords;
                getCountryFromCoordinates(latitude, longitude)
                    .then((country) => {
                        setCountry(country);
                        // console.log("Country:", country);
                    })
                    .catch((error) => {
                        console.error("Error:", error.message);
                    });
            } catch (error) {
                console.error("Error getting location:", error.message);
            }
        };

        if ("geolocation" in navigator) {
            getLocation();
        }
    }, []);

    useEffect(() => {
        if (country) {
            searchEWasteStores(country)
                .then((stores) => {
                    setStores(stores);
                })
                .catch((error) => {
                    console.error("Error searching for e-waste stores:", error.message);
                });
        }
    }, [country]);
    return (
        <StoreComp country={country} stores={stores} />

    );
};

export default StorePage;