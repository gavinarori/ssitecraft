const Pricing = () => {
    return (
        <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center mb-10">
                <h1 className="text-2xl font-bold sm:text-3xl">Our Packages</h1>
                <p className="mt-4 text-gray-500">
                    Choose a package that best suits your needs and enjoy a range of features designed to help you succeed online.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                {/* Starter Plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Starter
                            <span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 text-gray-700">Ideal for small businesses and personal blogs.</p>
                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Responsive Design </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700">  Customizable Theme </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Contact Form and Page </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Search Engine Optimization (SEO) </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700">  Browser Compatibility </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Gallery and Portfolio </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Pro Plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 text-gray-700">Perfect for growing businesses and e-commerce websites.</p>
                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Search and Filtering </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Checkout and Payment </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Order Management and Fulfillment </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700">  Analytics and Reporting </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700">  Product Management </span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
                {/* Enterprise Plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Enterprise
                            <span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 text-gray-700">For large enterprises with advanced requirements.</p>
                        <a
                            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Quality Assurance and Testing </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Custom Development and Integration </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Dedicated Support and Maintenance </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Advanced Analytics and Reporting </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Customized Solutions </span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
