import {
  Card,
  CardContent,
} from "@/app/components/ui/card";
import { showCaseBlocks } from "./constants";

const ComponentPacks = () => {
  return (
    <div className="">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">UI Blocks</h2>

            <p className="mt-4 max-w-md text-gray-500">
            Build fast and efficiently with our pre-designed UI blocks. Customize and combine them to create a unique user interface that suits your needs.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showCaseBlocks.map((block) => (
            <li key={block.id}>
              <Card>
                <CardContent className="mt-4">
                  <a href="#" className="group block overflow-hidden">
                    <div className="flex items-center overflow-hidden rounded-xl border border-gray-950/5 bg-gray-50 text-center ring-offset-white transition duration-300 group-hover:border-primary/10 group-hover:bg-gray-100 group-hover:ring-1 group-hover:ring-gray-950/10 group-hover:ring-offset-4 dark:bg-gray-800/70 dark:ring-offset-gray-950 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:ring-white/10">
                    <img
                      src={block.imageUrl}
                      alt={block.name}
                      className="h-auto w-auto  "
                    />
                    </div>
                    
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {block.name}
                      </h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComponentPacks;
