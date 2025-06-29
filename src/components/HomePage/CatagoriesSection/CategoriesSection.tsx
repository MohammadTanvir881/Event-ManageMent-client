import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Conferences", icon: "🎤" },
  { name: "Workshops", icon: "🔧" },
  { name: "Networking", icon: "🤝" },
  { name: "Hackathons", icon: "💻" },
  { name: "Meetups", icon: "👥" },
  { name: "Webinars", icon: "📹" },
  { name: "Charity", icon: "❤️" },
  { name: "Expos", icon: "🏢" },
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Explore by <span className="text-indigo-400">Category</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Discover events tailored to your interests
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className={cn(
                "h-24 sm:h-28 flex flex-col items-center justify-center",
                "border-slate-700 bg-slate-800/50 hover:bg-slate-700/70",
                "transition-all duration-300 hover:border-indigo-400/50",
                "hover:shadow-md hover:-translate-y-1 group"
              )}
            >
              <span className="text-2xl sm:text-3xl mb-2 group-hover:text-indigo-400 transition-colors">
                {category.icon}
              </span>
              <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white">
                {category.name}
              </span>
            </Button>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="ghost"
            className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20"
          >
            View all categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}