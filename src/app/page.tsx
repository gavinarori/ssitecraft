import Image from "next/image";
import Announcement from '@/app/components/Announcement/page'
import  Landing  from "./components/landing/page";
import  Services  from "./components/services/page";
import  Footer  from "./components/Footer/page";
import  InfiniteMovingCardsDemo  from "./components/Testimonial/page"; 
import  {MacbookScrollDemo} from "./components/Stats";
import  Extra  from "./components/Extra";
import { SectionVideo } from "./components/ui/section-video";
import Pricing from "./components/pricing";
import { HeroScrollDemo } from "./components/containerScroll";
import { HeroParallaxDemo } from "./components/templates";

export default function Home() {
  return (
    <main className=" ">
      <Announcement />
      <Landing />
      <MacbookScrollDemo />
      <Services />
      <Extra /> 
      <HeroScrollDemo />
      <HeroParallaxDemo/>
      <SectionVideo/>
      <Pricing />
      <InfiniteMovingCardsDemo />
      <Footer />
     
    </main>
  );
}
