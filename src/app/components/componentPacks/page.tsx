import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const ComponentPacks = () => {
  return (
    <div className="">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Card>
                <CardContent className="mt-4">
                  <a href="#" className="group block overflow-hidden">
                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-950/5 bg-gray-50 text-center ring-offset-white transition duration-300 group-hover:border-primary/10 group-hover:bg-gray-100 group-hover:ring-1 group-hover:ring-gray-950/10 group-hover:ring-offset-4 dark:bg-gray-800/70 dark:ring-offset-gray-950 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:ring-white/10">
                    <img
                      src="https://tailus.io/uploads/thumbnails/category/hero-section.svg"
                      alt="Basic Tee"
                      className="h-auto w-auto  "
                    />
                    </div>
                    
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Banner section
                      </h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
            {/* Repeat similar structure for other products */}
            <li>
              <Card>
                <CardContent className="mt-4">
                <a href="#" className="group block overflow-hidden">
                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-950/5 bg-gray-50 text-center ring-offset-white transition duration-300 group-hover:border-primary/10 group-hover:bg-gray-100 group-hover:ring-1 group-hover:ring-gray-950/10 group-hover:ring-offset-4 dark:bg-gray-800/70 dark:ring-offset-gray-950 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:ring-white/10">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVYWwPxmxnVtgpFSngVh0hh0H8RALdJvIxQ&s"
                      alt="Basic Tee"
                      className="h-auto w-auto  "
                    />
                    </div>
                    
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Navbar section
                      </h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="mt-4">
                <a href="#" className="group block overflow-hidden">
                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-950/5 bg-gray-50 text-center ring-offset-white transition duration-300 group-hover:border-primary/10 group-hover:bg-gray-100 group-hover:ring-1 group-hover:ring-gray-950/10 group-hover:ring-offset-4 dark:bg-gray-800/70 dark:ring-offset-gray-950 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:ring-white/10">
                    <img
                      src="https://flowbite.s3.amazonaws.com/block-thumbnails/marketing/features.svg"
                      alt="Basic Tee"
                      className="h-auto w-auto  "
                    />
                    </div>
                    
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        features & services section
                      </h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="mt-4">
                <a href="#" className="group block overflow-hidden">
                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-950/5 bg-gray-50 text-center ring-offset-white transition duration-300 group-hover:border-primary/10 group-hover:bg-gray-100 group-hover:ring-1 group-hover:ring-gray-950/10 group-hover:ring-offset-4 dark:bg-gray-800/70 dark:ring-offset-gray-950 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:ring-white/10">
                    <img
                      src="https://tailus.io/uploads/thumbnails/category/login.svg"
                      alt="Basic Tee"
                      className="h-auto w-auto  "
                    />
                    </div>
                    
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Login section
                      </h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComponentPacks;
