import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Phone from "@/app/components/icons/Phones.png";
import Watch from "@/app/components/icons/Smart Watches.png";
import Camera from "@/app/components/icons/Cameras.png";
import Headphone from "@/app/components/icons/Headphones.png";
import Computer from "@/app/components/icons/Computers.png";
import Gaming from "@/app/components/icons/Gaming.png";


const categories = [
  { name: 'Phones', icon: Phone },
  { name: 'Smart Watches', icon: Watch },
  { name: 'Cameras', icon: Camera },
  { name: 'Headphones', icon: Headphone },
  { name: 'Computers', icon: Computer },
  { name: 'Gaming', icon: Gaming },
];


const CategorySection = () => {
  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Browse By Category</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <Link href={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} key={category.name}>
            <div style={{ margin: '10px', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                <Image src={category.icon} alt={category.name} width={50} height={50} layout="intrinsic" />
              </div>
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;


