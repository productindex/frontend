import React from "react";

interface StoreAvailabilityProps {
  openingTime?: string;
  closingTime?: string;
}
const StoreAvailability: React.FC<StoreAvailabilityProps> = ({
  openingTime,
  closingTime
}) => {
  const availabilityStatus = (openingTime, closingTime) => {
    const currentTime = new Date().toLocaleTimeString();
    const oneHourAhead = new Date(
      new Date().getTime() + 1 * 60 * 60 * 1000
    ).toLocaleTimeString();

    if (currentTime < openingTime && oneHourAhead >= openingTime) {
      return <span className="warning bold">Opening soon</span>;
    }
    if (currentTime < closingTime && oneHourAhead >= closingTime) {
      return <span className="warning bold">Closing soon </span>;
    }
    if (currentTime > openingTime && currentTime < closingTime) {
      return <span className="success bold"> Open </span>;
    }

    if (currentTime > closingTime || currentTime < openingTime) {
      return <span className="error bold"> Closed </span>;
    }
    if (!openingTime || !closingTime) {
      return <span className="error bold"> Closed </span>;
    }
    if (openingTime == closingTime) {
      return <span className="success bold"> Open </span>;
    }
  };
  return <div>{availabilityStatus(openingTime, closingTime)}</div>;
};

export { StoreAvailability };
