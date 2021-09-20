import React from "react";
import Car from "../models/car";

const CollectionItem: React.FunctionComponent<Car> = (car) => {
  return <div> {car.name} </div>;
};

export default CollectionItem;
