import Header from "./components/header"
import Image from "next/image"
import Banner from "./images/Banner 2.png"
import Hero from "./components/hero"
import SmallBanner from "./components/smallBanner"
import Footer from "./components/footer"
import CategorySection from "./components/categorySection"
import Products from "./components/product"
import Discount from "./components/discount"

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <SmallBanner/>
    <CategorySection/>
    <Products/>
    <Discount/>
    <Image src={Banner} alt="Search" width={"1600"} />
    <Footer/>
    </>
  );
}
