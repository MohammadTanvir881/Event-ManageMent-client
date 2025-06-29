import { TestimonialCard } from "@/components/Cards/TestimonalCards/TestimonialCards";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    message:
      "Eventify has transformed how we manage our conferences. The platform is intuitive and our attendees love it!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "TechConf Inc."
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    message:
      "Found my last two co-founders at events listed here. The quality of networking opportunities is outstanding.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    company: "Startup Ventures"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    message:
      "As someone who attends 20+ events yearly, Eventify saves me hours of research. Highly recommended!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    company: "Global Marketing Solutions"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Trusted by <span className="text-indigo-400">Industry Leaders</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Hear what professionals are saying about their Eventify experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// function TestimonialCard({ testimonial }: { testimonial: any }) {
//   return (
//     <Card className="bg-slate-800/50 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-300 group h-full">
//       <CardContent className="p-8">
//         {/* Rating */}
//         <div className="flex mb-6">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               className={`w-5 h-5 ${
//                 i < testimonial.rating
//                   ? "text-yellow-400 fill-yellow-400"
//                   : "text-slate-600"
//               }`}
//             />
//           ))}
//         </div>
        
//         {/* Testimonial text */}
//         <blockquote className="text-lg italic text-slate-300 mb-8 leading-relaxed">
//           "{testimonial.message}"
//         </blockquote>
        
//         {/* Author info */}
//         <div className="flex items-center">
//           <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-400/30 mr-4">
//             <Image
//               src={testimonial.avatar}
//               alt={testimonial.name}
//               width={48}
//               height={48}
//               className="object-cover"
//             />
//           </div>
//           <div>
//             <h4 className="font-semibold text-white">{testimonial.name}</h4>
//             <p className="text-sm text-slate-400">{testimonial.role}</p>
//             <p className="text-xs text-slate-500 mt-1">{testimonial.company}</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }