import Image from "next/image";
import Navbar from "../../../components/Navbar";
import HeroSection from "../../../components/HeroSection";
import NewArrivals from "../../../components/NewArrivals";
import MosaicSection from "../../../components/MosaicSection";
import PopularItemSection from "../../../components/PopularItemSection";
import OrangeBox from "../../../components/OrangeBox";
import VideoSection from "../../../components/VideoSection";
import ChoiceSection from "../../../components/ChoiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <MosaicSection />
      <PopularItemSection />
      <VideoSection />
      <ChoiceSection />
      <OrangeBox />
    </>
  );
}
