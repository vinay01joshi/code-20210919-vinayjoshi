import CollectionItem from "../components/collection-item";
import Car from "../models/car";
import "./shop-page.css";

const ShopPage = () => {
  const cars: any = [
    {
      id: 1,
      name: "Audi",
      price: 50000,
      image:
        "https://www.setaswall.com/wp-content/uploads/2017/11/Audi-A8-Wallpaper-20-1920x1080.jpg",
    },
    {
      id: 2,
      name: "Mercedes",
      price: 55000,
      image:
        "http://www.thewowstyle.com/wp-content/uploads/2015/02/Audi-cars-wallpaper.jpg",
    },
    {
      id: 3,
      name: "Skoda",
      price: 9000,
      image:
        "https://www.automobilians.com/wp-content/uploads/2020/05/2020-Skoda-Karoq-India-Launch-2-scaled.jpg",
    },
    {
      id: 4,
      name: "Volvo",
      price: 50000,
      image:
        "https://amcdn.blob.core.windows.net/media/1/volvo-manufacturer-profile--march-2018-/211732-xc60-t8-inscription.jpg",
    },
  ];

  return (
    <div className="shop">
      <h1>Shop Page</h1>
      <div className="collection-preview">
        {cars.map((car: Car) => (
          <CollectionItem
            id={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
