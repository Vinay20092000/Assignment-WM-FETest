import React, { useState } from "react";
import InputBox from "../AtomicComponents/InputBox";
import Dropdown from "../AtomicComponents/Dropdown";
import Button from "../AtomicComponents/Button";

const FlightSearchBox = ({ onSearch, onReset }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSwap = () => {
    setSource(destination);
    setDestination(source);
  };
  
  const handleSearch = () => {
    onSearch(source, destination, passengers);
  };

  const handleReset = () => {
    setSource("");
    setDestination("");
    setPassengers(1);
    onReset();
  };

  return (
    <div className="bg-slate-200 rounded p-2 pt-8 mt-6 drop-shadow-lg flex px-10 gap-10">
      <div>
        <p className="text-0.5xl font-bold my-2">Source:</p>
        <InputBox
          InputClassName="border m-auto w-4/5 p-1 "
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <Button
        ButtonClassName="border rounded bg-gray-500 text-white h-6 my-12 px-4 pb-6 mr-8"
        text="Swap"
        onClick={handleSwap}
      />
      <div>
        <p className="text-0.5xl font-bold my-2">Destination:</p>
        <InputBox
          InputClassName="border m-auto w-4/5 p-1"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <p className="text-0.5xl font-bold my-2">No. of Passengers</p>
        <Dropdown
          DropdownClassName="border m-auto w-full p-1"
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
      </div>
      <div>
        <p>
          <Button
            ButtonClassName="border bg-green-600 text-white w-full px-6 py-1 mt-2 ml-20"
            text="SUBMIT"
            onClick={handleSearch}
          />
        </p>
        <p>
          <Button
            ButtonClassName="border bg-red-600 text-white w-full px-6 py-1 mt-2 ml-20"
            text="RESET"
            onClick={handleReset}
          />
        </p>
      </div>
    </div>
  );
};

export default FlightSearchBox;
