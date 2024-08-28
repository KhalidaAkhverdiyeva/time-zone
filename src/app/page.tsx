import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <NewArrivals/>
    </>
    
  );
}
