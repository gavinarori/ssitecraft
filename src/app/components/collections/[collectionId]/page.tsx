"use client"

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


const ProductDetails = ({ params }:any) => {

  const { collectionId } = params;
  const product = products.find(p => p.id === parseInt(collectionId));
  if (!product) return <p>Product not found</p>;

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 max-w-screen ">


  <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
  <div className="flex flex-wrap gap-6 pb-3">
            <a
              href="/components/collections"
              className="relative flex bg-slate-800 h-12 w-full items-center rounded-full justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white "
                >Preview</span>
            </a>
            <a
              href="/components/collections"
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
    <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
      Check availability in store
    </button>
    <div>
      <div className="border-t border-b py-4 mt-7 border-gray-200">
        <div data-menu className="flex justify-between items-center cursor-pointer">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
          <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
            <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
      </div>
    </div>
    <div>
    
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
