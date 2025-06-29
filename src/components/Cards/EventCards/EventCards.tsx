import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export function EventCard({ event }: { event: any }) {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg group overflow-hidden">
      {/* Image with gradient overlay */}
      <div className="relative aspect-video">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {event.featured && (
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Featured
            </Badge>
          )}
          {event.new && (
            <Badge className="bg-green-600 hover:bg-green-700 text-white">
              New
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4">
          {event.price === "Free" ? (
            <Badge variant="secondary" className="px-3 py-1">
              Free
            </Badge>
          ) : (
            <div className="bg-slate-900/90 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
              {event.price}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white line-clamp-2 group-hover:text-indigo-300 transition-colors">
            {event.title}
          </h3>

          {/* Date and Time */}
          <div className="flex items-center text-slate-300 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-indigo-400" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="mx-2 text-slate-500">•</span>
            <Clock className="w-4 h-4 mr-2 text-indigo-400" />
            <span>{event.time}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-slate-300 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center p-6 pt-0 border-t border-slate-700/50">
        <Badge
          variant="outline"
          className="border-indigo-400/30 text-indigo-300"
        >
          {event.category}
        </Badge>
        <Button
          variant="outline"
          size="sm"
          className=" bg-indigo-600 border-none text-white hover:bg-indigo-800 hover:text-white transition-colors"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
