import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 h-full hover:border-indigo-400/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-slate-500"
              }`}
            />
          ))}
        </div>
        <p className="text-slate-300 italic mb-6">"{testimonial.message}"</p>
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full object-cover mr-3"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-slate-400">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
