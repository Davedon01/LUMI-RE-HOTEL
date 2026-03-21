import Amenities from "@/Components/Amenities";
import BookingBar from "@/Components/BookingBar";
import FeaturedRooms from "@/Components/FeaturedRooms";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Location from "@/Components/Location";
import Newsletter from "@/Components/Newsletter";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <BookingBar />
        <FeaturedRooms />
        <Amenities />
        {/* <Gallery /> */}
        <Testimonials />
        <Newsletter />
        <Location />
      </div>
    </main>
  );
}
