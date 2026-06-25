import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { MenuHighlights } from "@/components/MenuHighlights";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { ReservationForm } from "@/components/ReservationForm";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Story />
      <MenuHighlights />
      <Gallery />
      {site.reservationEnabled && <ReservationForm />}
      <Visit />
      <Footer />
    </main>
  );
}
