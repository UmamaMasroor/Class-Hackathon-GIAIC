import Image from "next/image";
import iPhoneImage from "../images/Iphone 14 pro 1 (12).png";
import AirPodsImage from "../images/Iphone 14 pro 1 (13).png";
import WatchImage from "../images/Iphone 14 pro 1 (14).png";
import image from "../images/Iphone 14 pro 1 (15).png";

const products = [
  { id: 1, name: "Apple iPhone 14 Pro 512GB Gold", price: "$1437", image: iPhoneImage },
  { id: 2, name: "AirPods Max Silver", price: "$549", image: AirPodsImage },
  { id: 3, name: "Apple Watch Series 9 GPS", price: "$399", image: WatchImage },
  { id: 4, name: "Apple iPhone 14 Pro 1TB Gold", price: "$1499", image: iPhoneImage },
  { id: 1, name: "Apple iPhone 14 Pro 512GB Gold", price: "$1437", image: image },
];

export default function DiscountProducts() {
  return (
    <section className="discount-products">
      <h2>Discounts up to -50%</h2>
      <div className="discount-product-grid">
        {products.map((product) => (
          <div className="discount-product-card" key={product.id}>
            <Image src={product.image} alt={product.name} width={200} height={200} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
