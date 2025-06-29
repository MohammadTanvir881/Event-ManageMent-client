import { Button } from "@/components/ui/button";

const categories = [
  "Conferences",
  "Workshops",
  "Networking",
  "Hackathons",
  "Meetups",
  "Webinars",
  "Charity",
  "Expos",
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Browse by <span className="text-indigo-400">Category</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find exactly what you're looking for in our curated categories
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="px-4 sm:px-6 py-2 text-sm sm:text-base font-medium border-slate-700 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}