import { EventCard } from "@/components/Cards/EventCards/EventCards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-06-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    category: "Conference",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: "$99",
    featured: true,
  },
  {
    id: 2,
    title: "Startup Networking Mixer",
    date: "2024-06-20",
    time: "06:00 PM",
    location: "New York, NY",
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: "Free",
    new: true,
  },
  {
    id: 3,
    title: "UX Design Workshop",
    date: "2024-06-25",
    time: "10:00 AM",
    location: "Online",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: "$49",
  },
];

export function UpcomingEvents() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
              Upcoming <span className="text-indigo-400">Events</span>
            </h2>
            <p className="text-slate-300">
              Discover the latest gatherings in your community
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 bg-indigo-600 border-none text-white hover:bg-indigo-800 hover:text-white transition-colors"
          >
            View All Events
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
