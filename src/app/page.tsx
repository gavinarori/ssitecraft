
import Announcement from '@/app/components/Announcement/page'
import  Landing  from "./components/landing/page";
import  Services  from "./components/services/page";
import  Footer  from "./components/Footer/page";
import  MarqueeDemoVertical from './components/Testimonial/page';
import  {MacbookScrollDemo} from "./components/Stats";
import  Extra  from "./components/Extra";
import HeroVideoDialogDemo from "./components/ui/section-video";
import { HeroScrollDemo } from "./components/containerScroll";
import HeroParallaxWithBlurFade  from "./components/templates";
import Blocks from './components/blocks';


export default function Home() {
  return (
    <main className=" sm:w-full">
      <Landing />
      <MacbookScrollDemo />
      <Services />
      <Extra /> 
      <HeroScrollDemo />
      <HeroParallaxWithBlurFade/>
      <Blocks />
      <HeroVideoDialogDemo/>
      <MarqueeDemoVertical />
      <Footer />
     
    </main>
  );
}
