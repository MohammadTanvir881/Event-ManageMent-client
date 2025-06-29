import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="bg-slate-800/50 border border-slate-700/50 hover:border-indigo-400/30 transition-all duration-300 group h-full">
      <CardContent className="p-8">
        {/* Rating */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-slate-600"
              }`}
            />
          ))}
        </div>

        {/* Testimonial text */}
        <blockquote className="text-lg italic text-slate-300 mb-8 leading-relaxed">
          "{testimonial.message}"
        </blockquote>

        {/* Author info */}
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-400/30 mr-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-slate-400">{testimonial.role}</p>
            <p className="text-xs text-slate-500 mt-1">{testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
