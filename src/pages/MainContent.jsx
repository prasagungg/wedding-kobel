import Hero from "@/pages/Hero";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Gallery from "@/pages/Gallery";
import Bride from "@/pages/Bride";

// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Hero />
      <Bride />
      <Gallery />
      <Location />
      <Gifts />
      <Wishes />
    </>
  );
}
