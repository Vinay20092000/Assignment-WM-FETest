import React from "react";
import Title from "../AtomicComponents/Title";
import Subtitle from "../AtomicComponents/Subtitle";
import Button from "../AtomicComponents/Button";
import Text from "../AtomicComponents/Text";

const Card = ({ flight, passengers, onButtonClick }) => {
  const sourceAbbreviation = flight.source.slice(0, 3);
  const destinationAbbreviation = flight.destination.slice(0, 3);
  const totalFare = flight.fare * passengers;

  return (
    <div className="border shadow-lg shadow-grey-900 px-6 py-4 mb-10">
      <Title
        TitleClassName="text-violet-500 font-bold text-xl mt-2"
        text={flight.title}
      />
      <Subtitle
        SubtitleClassName="font-bold text-2xl mt-3"
        text="Flight Details:"
      />
      <Text
        TextClassName="block mt-5"
        text={`${sourceAbbreviation} to ${destinationAbbreviation}`}
      />
      <Text TextClassName="block mt-3" text={`${flight.timings}`} />
      <Text TextClassName="text-xl font-bold mt-3" text={`Rs. ${totalFare}`} />
      <Button
        ButtonClassName="bg-blue-600 text-white px-6 pb-2 mt-3 ml-4"
        text="Buy"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default Card;
