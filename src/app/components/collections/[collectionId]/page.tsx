"use client"

import { 
  PayPalScriptProvider,
  PayPalButtons 
} from '@paypal/react-paypal-js'
import 
React,
 { 
  useEffect, 
  useState ,
  useRef
} from "react";
import { MultiStepLoader as Loader } from "@/app/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Marquee from "@/app/components/ui/marquee";
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog"
import OrbitingCircles from "@/app/components/ui/avatar-circles";
import type { ConfettiRef } from "@/app/components/ui/confetti";
import Confetti from "@/app/components/ui/confetti";
import { useToast } from "@/app/components/ui/use-toast"
import { ArrowRightIcon, Download } from "lucide-react";
import { Button, buttonVariants } from "@/app/components/ui/Button";
import { cn } from "@/utils/cn";




const products = [
  {
    id: 1,
    title: "Soleworthy",
    price: 40,
    websiteLink:"https://modern-e-commerce-website-gray.vercel.app/",
    repo: "modern-e-commerce-website",
    owner: "gavinarori",
    imgSrc: {
      light: [
        "/soleworthy/light_1.png",
        "/soleworthy/dark_1.png",
        "/soleworthy/dark_2.png",
        "/soleworthy/dark_3.png",
        "/soleworthy/dark_4.png",
      ],
      dark: [
       
      ]
    }
  },
  
  {
    id: 2,
    title: "Fitness website",
    websiteLink:"https://thefitsite.pages.dev/",
    price: 45,
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    imgSrc: {
      light: [
        "/fitness/fit_1.jpeg",
        "/fitness/fit_2.jpeg",
        "/fitness/fit_3.jpeg",
        "/fitness/fit_4.jpeg",
      ],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea3_Lumio%20Homepage.webp"]
    }
  },
  {
    id: 3,
    title: "food catering",
    websiteLink:"https://food-catering-kappa.vercel.app/",
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    price: 24,
    imgSrc: {
      light: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png"],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png"]
    }
  },
  {
    id: 4,
    title: "Deadfellaz Website",
    websiteLink:"",
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    price: 34,
    imgSrc: {
      light: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e8a_Frame%2036-min.png"],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e8a_Frame%2036-min.png"]
    }
  },
  {
    id: 5,
    title: "creators Homepage",
    websiteLink:"https://yodora-jade.vercel.app/",
    price: 20,
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    imgSrc: {
      light: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png"],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png"]
    }
  },
  {
    id: 6,
    title: "Warbler Labs",
    websiteLink:"",
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    price: 20000,
    imgSrc: {
      light: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e66_Warbler.png"],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e66_Warbler.png"]
    }
  },
  {
    id: 7,
    title: "Planto",
    websiteLink:"",
    price: 0,
    free: true,
    repo: "soleworthy-repo",
    owner: "soleworthy-owner",
    imgSrc: {
      light: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6639fcdbca63788dd58cfa85_Untitled%20design%20(2).png"],
      dark: ["https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6639fcdbca63788dd58cfa85_Untitled%20design%20(2).png"]
    }
  }
];

const loadingStates = [
  { text: "Initializing payment" },
  { text: "Verifying payment details" },
  { text: "Processing transaction" },
  { text: "Contacting payment gateway" },
  { text: "Awaiting confirmation" },
  { text: "Transaction approved" },
  { text: "Generating receipt" },
  { text: "Payment successful" },
  { text: "Happy Coding !" },
];



 


 function ShowcaseCard({ product }:any) {
  return (
    <Link
      href={`/components/collections/${product.id}`}
      className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
    >
      <img
        src={product.imgSrc.light[0]}
        alt={product.title}
        width={500}
        height={300}
        className="size-full object-cover max-h-[300px] rounded-xl"
      />


      <div className="flex flex-col">
        <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {product.title}
          <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}



const ProductDetails = ({ params }:any) => {
  const confettiRef = useRef<ConfettiRef>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paidProductImage, setPaidProductImage] = useState<any>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (loading) {
      const totalDuration = loadingStates.length * 2000; 
      const timer = setTimeout(() => {
        setLoading(false);
        handleDownload ()
        setDialogOpen(true);  
      }, totalDuration);

      return () => clearTimeout(timer);
    }
  }, [loading, router]);

  const handleDownload = async () => {
    if (!product) {
      toast({
        title: "Error Downloading",
        description: "Product is undefined. Cannot start download",
      });
  
      console.error("Product is undefined. Cannot start download.");
      return;
    }
    toast({
      title: "Automatic Download started",
      description: "Your download will begin shortly.",
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/repo/download`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({  repo: product.repo, owner: product.owner }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const downloadUrl = data.downloadUrl;
      window.location.href = downloadUrl;
    } catch (error) {
      console.error("Error occurred while downloading. Please try again.", error);
    } 
  };
   
  const paypalCreateOrder = async (data: any, actions: any) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: product?.price.toString() || "0",
                },
            },
        ],
    });
};


const paypalCaptureOrder = async (data: any, actions: any) => {
  return actions.order.capture().then(function (details: any) {
    console.log("Transaction completed by " + details.payer.name.given_name);
    setLoading(true);
    const paidProductId = product?.id
    const paidProduct = products.find(product => product.id === paidProductId);

    if (paidProduct) {
      setLoading(true);
      setPaidProductImage(paidProduct.imgSrc.light[0]);
    } else {
      console.error("Product not found");
    }
  });
};


  const { collectionId } = params;
  const product = products.find(p => p.id === parseInt(collectionId));
  if (!product) return <p>Product not found</p>;

  
  
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 max-w-screen ">

  <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
  <div className="flex flex-wrap gap-6 pb-3">
            <a
              href={`${product.websiteLink}`}
               target="_blank"
               rel="noopener noreferrer"
              className="relative flex bg-slate-800 h-12 w-full items-center rounded-full justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white "
                >Preview</span>
            </a>
            <button
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary dark:text-white"
                >More about</span>
              
          </button>
        </div>
    <img className="w-full h-auto rounded-lg" alt="image of a girl posing"  src={product.imgSrc.light[currentImage]} />
    <div className="flex mt-4 gap-2">
          {product.imgSrc.light.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${currentImage === index ? 'border-2 border-primary' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
  </div>

  <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-20">
    <div className="border-b border-gray-200 pb-6">
      <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{product.title}</h1>
    </div>
    
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Pricing</p>
      <div className="flex items-center justify-center">
        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{product.price}</p>
        <svg className="text-gray-300 dark:text-white cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <PayPalScriptProvider
                    options={{
                        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                        currency: 'USD',
                        intent: 'capture'
                    }}
                >
                    <PayPalButtons
                        style={{
                            color: 'gold',
                            shape: 'rect',
                            label: 'pay',
                            height: 50
                        }}
                        createOrder={paypalCreateOrder}
                        onApprove={paypalCaptureOrder}
                    />
                </PayPalScriptProvider>

               
    <div>
      <div className="border-t border-b py-4 mt-7 border-gray-200">
        <div data-menu className="flex justify-between items-center cursor-pointer">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Find more websites</p>
        </div>
      </div>
    </div>
    <div className="relative flex flex-col  md:mt-6">
        <Marquee className="max-w-screen [--duration:40s]">
        {products.map(product => (
        <ShowcaseCard key={product.id} product={product} />
      ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-1/12 bg-gradient-to-l from-background"></div>
      </div>
  </div>


      {/* Multi-Step Loader */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* Optional: Add a close button for the loader */}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}

<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px] z-[100]">
          <DialogHeader>
            <DialogTitle>Download Files</DialogTitle>
          </DialogHeader>
          
          
      <div className="relative flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
      <div className="grid gap-4 py-4">
            <img
              src={paidProductImage}
              alt="Paid Product"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className='flex flex-wrap gap-6 pb-3'>
            <Button
              className="relative flex cursor-pointer bg-slate-200 h-8 mb-4 w-full items-center rounded-full justify-start px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-foreground mr-2 ">Guide</span>
                <Icons.guide />
            </Button>
          </div>
          <div className="relative flex h-auto w-auto  flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Tech stack
      </span>
 
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>
 
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
      
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
        </DialogContent>
      </Dialog>
</div>
  );
};

export default ProductDetails;

const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  notion: () => (
      <svg viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="#44a8b3">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
              <title>file_type_tailwind</title>
              <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" ></path>
          </g>
      </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg viewBox="0 -101.5 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" fill="#000000" fill-rule="nonzero"> </path> </g> </g></svg>
  ),
  whatsapp: () => (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#007acc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" ></path></g></svg>
  ),
  download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

),
guide: () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>


),
};