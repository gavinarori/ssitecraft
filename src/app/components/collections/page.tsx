import DotPattern from "@/app/components/ui/dot";
import { cn } from "@/utils/cn";
import { Badge } from "@/app/components/ui/badge"


const Collections = () => {
  const products = [
    {
      id: 1,
      title: "Soleworthy",
      price: "$30",
      imgSrc: "/soleworthy/light_1.png"
    },
    {
      id: 2,
      title: "Fitness website",
      price: "$45",
      imgSrc: "/fitness/fit_1.jpeg"
    },
    {
      id: 3,
      title: "food catering",
      price: "$24",
      imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/663904668f8979077697f0fd_Untitled%20design%20(1).png"
    },
    {
      id: 4,
      title: "Deadfellaz Website",
      price: "private",
      imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e8a_Frame%2036-min.png"
    },
    {
      id: 5,
      title: "creators Homepage",
      price: "$20",
      imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6638fc5db95cf1175bd394ef_Untitled%20design.png"
    }
    ,
    {
      id: 6,
      title: "Warbler Labs",
      price: "$20,000",
      imgSrc: "https://uploads-ssl.webflow.com/6637f8a2ca48c8a9c81c0dfe/6637f8a2ca48c8a9c81c0e66_Warbler.png"
    },
    {
      id: 7,
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
              <a href={`/components/collections/${product.id}`} className="group block overflow-hidden">
                <img
                  src={product.imgSrc}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 ">
                    {product.title} 
                    {(product.id === 1 || product.id === 3) && <Badge className="bg-red-500 ml-2 text-white" variant="outline">New</Badge>}
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
      
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
         
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
              <div className="absolute w-full bottom-0 inset-x-0 h-16 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="/wetogether.jpeg"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
            
          </div>
        </div>
      </div>
      
    </div>
    </section>
  );
};

export default Collections;