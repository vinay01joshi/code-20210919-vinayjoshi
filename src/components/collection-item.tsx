import React from "react";
import { Button, Card } from "react-bootstrap";
import Car from "../models/car";

const CollectionItem: React.FunctionComponent<Car> = (car) => {
  return (
    <>
      <Card style={{ width: "18rem", padding: "10px" }}>
        <Card.Img variant="top" src={car.image} />
        <Card.Body>
          <Card.Title>{car.name}</Card.Title>
          <Card.Text>{car.price}</Card.Text>
          <Button variant="primary">Add To cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CollectionItem;
