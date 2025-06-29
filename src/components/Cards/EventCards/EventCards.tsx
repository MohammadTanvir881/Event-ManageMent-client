import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export function EventCard({ event }: { event: any }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:shadow-lg hover:border-indigo-400/30 transition-all h-full flex flex-col">
      <div className="relative aspect-video">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        {event.featured && (
          <Badge className="absolute top-3 left-3 bg-indigo-600 hover:bg-indigo-700">
            Featured
          </Badge>
        )}
        {event.new && (
          <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700">
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
          {event.price !== "Free" && (
            <span className="text-indigo-400 font-medium whitespace-nowrap ml-2">
              {event.price}
            </span>
          )}
          {event.price === "Free" && (
            <Badge variant="secondary" className="ml-2">
              Free
            </Badge>
          )}
        </div>
        <div className="flex items-center text-slate-400 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-slate-400 text-sm">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-5 pt-0">
        <Badge variant="outline" className="border-slate-600">
          {event.category}
        </Badge>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-600 hover:bg-slate-700"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
