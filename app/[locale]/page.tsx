import Announcements from "@/components/Announcements";
// import ChurchCarousel from "@/components/ChurchCarousel";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection"
import MassTimes from "@/components/MassTimes"
import RecentEvent from "@/components/RecentEvent";

export default function Home() {
  return (
    <>
    <HeroSection />
    {/* <ChurchCarousel /> */}
    <Gallery />
    <MassTimes />
    <RecentEvent />
    <Announcements />
   
    </>
  
  );
}
