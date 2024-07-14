"use client"
import React, { useState } from 'react';

interface Service {
    title: string;
    description: string;
    imgSrc: string;
}

const services: Service[] = [
    {
        title: "Web Application Development",
        description: "Our web application development services provide tailored solutions to meet your unique business needs. We specialize in creating robust, scalable, and user-friendly web applications using the latest technologies. Whether you need an e-commerce platform, a content management system, or a custom web solution, our expert team is here to turn your vision into reality.",
        imgSrc: "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
    },
    {
        title: "Website Maintenance and Support",
        description: "Keep your website running smoothly and efficiently with our comprehensive maintenance and support services. We offer regular updates, security checks, performance optimization, and troubleshooting to ensure your site remains secure, fast, and up-to-date. Let us handle the technical details so you can focus on your core business.",
        imgSrc: "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
    },
    {
        title: "Branding and Graphic Design",
        description: "Make a lasting impression with our branding and graphic design services. We help you create a cohesive brand identity that resonates with your audience. From logos and business cards to complete brand overhauls, our creative team delivers eye-catching designs that set you apart from the competition.",
        imgSrc: "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
    }
];

const Services: React.FC = () => {
    const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

    const handleShowMore = (index: number) => {
        setShowMore((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="py-16">
            <div className="mx-auto max-w-lg text-center mb-10">
                <h1 className="text-2xl font-bold sm:text-3xl">Our Services</h1>
                <p className="mt-4 text-gray-500">Get noticed, get found, and get ahead with our expert services!</p>
            </div>
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold text-purple-900">{service.title}</h3>
                                <p className="mb-6">
                                    {showMore[index] ? service.description : `${service.description.substring(0, 100)}...`}
                                </p>
                                <a onClick={() => handleShowMore(index)} className="block cursor-pointer font-medium text-purple-600">
                                    {showMore[index] ? "show less" : "show more"}
                                </a>
                            </div>
                            <img src={service.imgSrc} className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
