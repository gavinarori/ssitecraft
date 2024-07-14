const Collections = () => {
    const products = [
      {
        id: 1,
        title: "Goldfinch",
        price: "$20,000",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea7_goldfinch-thumb.webp"
      },
      {
        id: 2,
        title: "content creators website",
        price: "Personal time",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea5_Course%20Template.webp"
      },
      {
        id: 3,
        title: "Lumio Homepage",
        price: "$20,000",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0ea3_Lumio%20Homepage.webp"
      },
      {
        id: 4,
        title: "food catering",
        price: "£24.00 GBP",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png"
      },
      {
        id: 5,
        title: "Deadfellaz Website",
        price: "private",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e8a_Frame%2036-min.png"
      },
      {
        id: 6,
        title: "creators Homepage",
        price: "$5000",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png"
      }
      ,
      {
        id: 7,
        title: "Warbler Labs",
        price: "$20,000",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e66_Warbler.png"
      },
      {
        id: 8,
        title: "Planto",
        price: "private",
        imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6639fcdbca63788dd58cfa85_Untitled%20design%20(2).png"
      }
    ];
  
    return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Templates Collection</h2>
            <p className="mt-4 max-w-md text-gray-500">
            Purchase High Quality Template For Your Website
            </p>
          </header>
  
          <div className="mt-8 flex items-center justify-between">
            <div className="flex rounded border border-gray-100">
              <button className="inline-flex size-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>
              <button className="inline-flex size-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
  
            <div>
              <label htmlFor="SortBy" className="sr-only">SortBy</label>
            </div>
          </div>
  
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(product => (
              <li key={product.id}>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src={product.imgSrc}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.title}
                    </h3>
                    <p className="mt-2">
                      <span className="sr-only">Regular Price</span>
                      <span className="tracking-wider text-gray-900">{product.price}</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="flex justify-center items-center text-lg">payment method coming soon....</p>
      </section>
    );
  };

  export default Collections;