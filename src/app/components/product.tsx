// components/ProductGrid.js
import Image from "next/image";
import IphoneImage from "../images/Iphone 14 pro 1 (4).png"; 
import image2 from "../images/Iphone 14 pro 1 (5).png";
import image3 from "../images/Iphone 14 pro 1 (6).png";
import image4 from "../images/Iphone 14 pro 1 (7).png";
import image5 from "../images/Iphone 14 pro 1 (8).png";
import image6 from "../images/Iphone 14 pro 1 (9).png";
import image7 from "../images/Iphone 14 pro 1 (10).png";
import image8 from "../images/Iphone 14 pro 1 (11).png";


export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max",
      description: "128GB Deep Purple",
      price: "$900",
      image: IphoneImage,
    },
    {
      id: 2,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image2,
    },
    {
      id: 3,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image3,
    },
    {
      id: 4,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image4,
    },
    {
      id: 5,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image5,
    },
    {
      id: 6,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image6,
    },
    {
      id: 7,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image7,
    },
    {
      id: 8,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image8,
    },
    {
      id: 9,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image2,
    },
    {
      id: 10,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: IphoneImage,
    },
    {
      id: 11,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image6,
    },
    {
      id: 12,
      name: "Blackmagic Pocket Cinema Camera 6K",
      description: "",
      price: "$2535",
      image: image2,
    },

  ];

  return (
    <div className="product-grid">
      <div className="product-grid-header">
        <h2>New Arrival</h2>
        <h2>Bestseller</h2>
        <h2>Featured Products</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image src={product.image} alt={product.name} width={200} height={200} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
