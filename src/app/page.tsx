import Image from "next/image";
import Header from '@/app/components/header/page'
import Announcement from '@/app/components/Announcement/page'
import { Landing } from "./components/landing/page";
import { Services } from "./components/services/page";
import { Footer } from "./components/Footer/page";
import { Testimonial } from "./components/Testimonial/page"; 
import { CTA } from "./components/Ctas/page";
import Statistics from "./components/Stats";
import { Extra } from "./components/Extra";
import { FAQs } from "./components/FAQs";

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <Announcement />
      <Landing />
      <Statistics  />
      <Services />
      <Extra />  
      <Testimonial />
      <FAQs/>
      <Footer />
     
    </main>
  );
}
