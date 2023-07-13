import React, { useState, useEffect } from "react";
import Heading from "./AtomicComponents/Heading";
import Image from "./AtomicComponents/Image";
import FlightSearchBox from "./MolecularComponents/FlightSearchBox";
import Card from "./MolecularComponents/Card";
import Footer from "./AtomicComponents/Footer";

const PageLayout = () => {
  const [flightData, setFlightData] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    const fetchFlightData = async () => {
      const response = await fetch("http://localhost:5555/flightData");
      const data = await response.json();
      setFlightData(data);
    };
    fetchFlightData();
  }, []);

  const handleSearch = (source, destination, passengers) => {
    const filteredResults = flightData.filter(
      (flight) =>
        flight.source.toLowerCase() === source.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );
    setFilteredFlights(filteredResults);
    setPassengers(passengers);

    const cardElement = document.getElementById("card-component");
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: "smooth" });
    }

  };

  const handleReset = () => {
    setFilteredFlights([]);
    setPassengers(1);
  };

  const handleFlightDetailsClick = () => {
    window.alert("Done!");
  };

  return (
    <html>
      <div className="m-8">
        <header className="flex border-b gap-2 ">
          <Heading
            HeadingClassName="text-4xl font-bold text-fuchsia-800"
            text="Flight Booking System"
          />
          <Image
            ImageClassName="ml-auto"
            src="https://logowik.com/content/uploads/images/google-flight1670.jpg"
            height="70px"
            width="90px"
            alt="Flight Booking System"
          />
        </header>
        <main>
          <FlightSearchBox onSearch={handleSearch} onReset={handleReset} />
          <p className="mt-6 font-bold">SEARCH RESULTS:</p>
          <div id="card-component"></div>
          <div className="mt-6 flex gap-10">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight, index) => (
                <Card
                  key={index}
                  flight={flight}
                  passengers={passengers}
                  onButtonClick={() => handleFlightDetailsClick()}
                />
              ))
            ) : (
              <p>No Flight Found.</p>
            )}
          </div>
        </main>
      </div>
      <footer className="fixed bottom-0  w-full bg-gray-200 p-4">
        <Footer
          FooterClassName="text-center "
          FooterTextClassName="text-gray-600"
          text="@2022 copyright"
          href="#"
          LinkClassName="text-blue-500 underline hover:text-blue-700"
          linkText="www.flightsys.com"
        />
      </footer>
    </html>
  );
};

export default PageLayout;
