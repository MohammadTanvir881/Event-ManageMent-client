import { TestimonialCard } from "@/components/Cards/TestimonalCards/TestimonialCards";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    message:
      "Eventify has transformed how we manage our conferences. The platform is intuitive and our attendees love it!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    message:
      "Found my last two co-founders at events listed here. The quality of networking opportunities is outstanding.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    message:
      "As someone who attends 20+ events yearly, Eventify saves me hours of research. Highly recommended!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-indigo-400">Community</span> Says
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join thousands of satisfied event organizers and attendees
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

