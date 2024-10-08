
import Announcement from '@/app/components/Announcement/page'
import  Landing  from "./components/landing/page";
import  Services  from "./components/services/page";
import  Footer  from "./components/Footer/page";
import  MarqueeDemoVertical from './components/Testimonial/page';
import  {MacbookScrollDemo} from "./components/Stats";
import  Extra  from "./components/Extra";
import HeroVideoDialogDemo from "./components/ui/section-video";
import Pricing from "./components/pricing";
import { HeroScrollDemo } from "./components/containerScroll";
import HeroParallaxWithBlurFade  from "./components/templates";


export default function Home() {
  return (
    <main className=" sm:w-full">
      <Landing />
      <MacbookScrollDemo />
      <Services />
      <Extra /> 
      <HeroScrollDemo />
      <HeroParallaxWithBlurFade/>
      <HeroVideoDialogDemo/>
      <Pricing />
      <MarqueeDemoVertical />
      <Footer />
     
    </main>
  );
}
