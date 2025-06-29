import { FeatureCard } from "@/components/Cards/FeaturedCards/FeaturedCards";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, PlusCircle, Users } from "lucide-react";



export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-indigo-400"> How  Eventify Works</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Simple steps to find or host your perfect event
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-indigo-400" />}
            title="Discover Events"
            description="Browse thousands of events tailored to your interests and location."
            step="1"
          />
          <FeatureCard
            icon={<PlusCircle className="w-8 h-8 text-indigo-400" />}
            title="Create & Manage"
            description="Easily set up your event with our intuitive creation tools."
            step="2"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-indigo-400" />}
            title="Connect & Engage"
            description="Network with attendees and make meaningful connections."
            step="3"
          />
        </div>
      </div>
    </section>
  );
}