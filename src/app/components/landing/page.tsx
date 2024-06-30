 const Landing = () =>{
    return (
        <section className="bg-gradient-to-t from-yellow-100 to-slate-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://img.freepik.com/premium-vector/isometric-bright-site-concept-businessman-top-world-entrepreneurs-compete-leadership-concept-web-design_130740-764.jpg?w=740"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl sm:mx-auto sm:w-10/12 md:w-2/3">Grow your audience</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
    )
}

export default Landing;