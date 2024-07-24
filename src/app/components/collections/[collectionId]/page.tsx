"use client"

import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import axios from 'axios';
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Marquee from "@/app/components/ui/marquee";
import Successful from "@/app/components/ui/successful";
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    title: "Goldfinch",
    price: 20000,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea7_goldfinch-thumb.webp"
  },
  {
    id: 2,
    title: "content creators website",
    price: 0,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea5_Course%20Template.webp"
  },
  {
    id: 3,
    title: "Lumio Homepage",
    price: 20000,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea3_Lumio%20Homepage.webp"
  },
  {
    id: 4,
    title: "food catering",
    price: 24,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png"
  },
  {
    id: 5,
    title: "Deadfellaz Website",
    price: 0,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e8a_Frame%2036-min.png"
  },
  {
    id: 6,
    title: "creators Homepage",
    price: 5000,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png"
  }
  ,
  {
    id: 7,
    title: "Warbler Labs",
    price: 20000,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e66_Warbler.png"
  },
  {
    id: 8,
    title: "Planto",
    price: 0,
    imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6639fcdbca63788dd58cfa85_Untitled%20design%20(2).png"
  }
];



 function ShowcaseCard({ product }:any) {
  return (
    <Link
      href={`/components/collections/${product.id}`}
      className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
    >
      <img
        src={product.imgSrc}
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
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(true);
   
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
    setIsPaymentSuccessful(true);
    setTimeout(() => {
      // Redirect after showing the success message
      window.location.href = "/path/to/redirect"; // Replace with your redirection path
    }, 3000); // 3 seconds delay
  });
};


  const { collectionId } = params;
  const product = products.find(p => p.id === parseInt(collectionId));
  if (!product) return <p>Product not found</p>;

  if (isPaymentSuccessful) {
    return <Successful />;
  }
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 max-w-screen ">


  <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
  <div className="flex flex-wrap gap-6 pb-3">
            <a
              href=""
              className="relative flex bg-slate-800 h-12 w-full items-center rounded-full justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white "
                >Preview</span>
            </a>
            <a
              href=""
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary dark:text-white"
                >More about</span>
              
          </a>
        </div>
    <img className="w-full h-auto rounded-lg" alt="image of a girl posing" src={product.imgSrc} />
  </div>

  <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-20">
    <div className="border-b border-gray-200 pb-6">
      <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Balenciaga Fall Collection</p>
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
</div>
  );
};

export default ProductDetails;
