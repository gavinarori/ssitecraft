"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default InfiniteMovingCardsDemo;
const testimonials = [
  {
    quote:
      "This agency transformed our online presence! Their professionalism and expertise resulted in a beautiful, user-friendly website that has significantly boosted our business.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
  },
  {
    quote:
      "Working with this agency was a fantastic experience. They delivered everything on time, and the quality of their work exceeded our expectations. Highly recommended!",
    name: "John Smith",
    title: "Marketing Director, Creative Solutions",
  },
  {
    quote:
      "The team's attention to detail and commitment to customer satisfaction were outstanding. Our new website has received rave reviews from our clients, and we couldn't be happier!",
    name: "Alice Johnson",
    title: "Founder, Health & Wellness Co.",
  },
  {
    quote:
      "From start to finish, the process was smooth and stress-free. The final product is not only visually appealing but also functional and easy to navigate. We are thrilled with the results!",
    name: "Michael Brown",
    title: "Owner, Brown's Bakery",
  },
  {
    quote:
      "Their innovative approach and creative solutions helped us stand out in a crowded market. The new site has increased our traffic and conversions substantially. Excellent work!",
    name: "Sarah Williams",
    title: "Marketing Manager, Fashion Forward",
  },
];
