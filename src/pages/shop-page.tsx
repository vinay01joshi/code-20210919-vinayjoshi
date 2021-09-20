import CollectionItem from "../components/collection-item";
import Car from "../models/car";

const ShopPage = () => {
  const cars: any = [
    { id: 1, name: "Audi", price: 50000, image: "" },
    { id: 2, name: "Mercedes", price: 55000, image: "" },
    { id: 3, name: "Skoda", price: 9000, image: "" },
    { id: 4, name: "Volvo", price: 50000, image: "" },
  ];

  return (
    <div className="shop">
      <h1>Shop Page</h1>
      {cars.map((car: Car) => (
        <CollectionItem
          id={car.id}
          name={car.name}
          price={car.price}
          image={car.image}
        />
      ))}
    </div>
  );
};

export default ShopPage;
