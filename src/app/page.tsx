import AboutMe from "@/components/AboutMe";
import EquipmentRentals from "@/components/EquipmentRentals";
import HeroBanner from "@/components/HeroBanner";
import LatestTracks from "@/components/LatestTracks";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div className="font-montserrat">
      <HeroBanner />
      <AboutMe />
      <LatestTracks />
      <UpcomingEvents />
      <EquipmentRentals />
    </div>
  );
}
