import React from "react"

const Footer = () =>{
    return(
<footer className="">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-center  sm:justify-start">
      <a href="/" className="inline-flex">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

            <h1 className=' font-bold text-[32px]'>Sitecraft</h1>
          </a>
      </div>

      
    </div>

    <div
      className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6"
    >


      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Our Services</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Web Development
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Web Design </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">  Graphic Design </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Branding  </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> weekly newsletter listing </a>
          </li>


          

          
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Helpful Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75 w-auto" href="#"> ssitecraft@gmail.com </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> phone:+254705470037 </a>
          </li>

        </ul>
      </div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2 md:ml-16 lg:ml-16">
        <p className="text-lg font-medium text-gray-900">Stay in Touch</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
          Get the inside scoop! Our newsletter is your go-to source for the latest trends, tools, and strategies to help you succeed in the digital landscape.
          </p>

          <form className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
              <label htmlFor="email" className="sr-only">Email</label>

              <input
                className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                type="email"
                placeholder="Enter your email"
              />

              <button
                className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-sm text-gray-500 sm:text-left">
        Copyright &copy; 2024. All rights reserved.
      </p>

      <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
        

        <li>
          <a
            href="https://www.instagram.com/ssitecraft"
            rel="noreferrer"
            target="_blank"
            className=" transition"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://x.com/ssitecraft"
            rel="noreferrer"
            target="_blank"
            className=" transition "
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className=" transition "
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

      </ul>
    </div>
  </div>
  <div className="h-auto w-full sm:w-auto dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  <h5 className="text-[#161616] text-[80px] sm:text-[300px] overflow-x-hidden leading-none text-center pointer-events-none">
    SiteCraft
  </h5>
</div>

</footer>
    )
}

export  default Footer;