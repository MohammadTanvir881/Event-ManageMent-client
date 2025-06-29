import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[700px]  flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-16 gap-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-2xl mx-auto lg:mx-0 space-y-6 z-10 px-4 sm:px-0">
        <Badge
          variant="secondary"
          className="text-sm font-medium px-4 py-1 mb-4"
        >
          Join thousands of events worldwide
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
          Discover & Create{" "}
          <span className="whitespace-nowrap">Unforgettable Events</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-lg">
          Find local events, connect with like-minded people, or host your own
          gathering. Everything you need for memorable experiences.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Explore Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-slate-600 hover:bg-slate-800 transition-colors"
          >
            Create Event
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-8 text-sm text-slate-400">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/${
                  i % 2 === 0 ? "women" : "men"
                }/${i}0.jpg`}
                alt="User"
                width={32}
                height={32}
                className="rounded-full border-2 border-slate-800"
              />
            ))}
          </div>
          <span>Join 10,000+ event enthusiasts</span>
        </div>
      </div>
      <div className="relative w-full max-w-2xl mx-auto lg:mx-0 z-10 mt-12 lg:mt-0">
        <div className="absolute -inset-4 bg-indigo-500/20 rounded-xl blur-2xl"></div>
        <img
          src="https://i.ibb.co/pjvsMQX3/profile.jpg"
          alt="People at an event"
          width={800}
          height={500}
          loading="lazy"
          className="relative rounded-lg shadow-2xl border border-slate-700 w-full object-cover aspect-video lg:aspect-auto lg:h-[500px]"
        />
      </div>
    </section>
  );
}
