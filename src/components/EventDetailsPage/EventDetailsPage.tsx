import { Calendar, Clock3, MapPin, User } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function EventDetailsPage({ event }: { event: any }) {
  console.log("Event Details Page:", event);
  const date = event.eventDate;
  const time = event.eventTime;

  // console.log({date, time});
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="border-slate-700 bg-slate-800 text-slate-100">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Event Details
                </CardTitle>
                <CardDescription className="text-slate-400 mt-2">
                  All the information about this event
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700 text-sm font-medium text-slate-300">
                  <User className="h-4 w-4 mr-1" />
                  {event.attendeeCount} attending
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
             <h3 className="text-md font-semibold text-slate-200">
                {event.eventTitle}
              </h3>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-200">
                Description
              </h3>
              <p className="text-slate-300">{event.eventDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-700 text-slate-300">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Date</p>
                  <p className="font-medium text-slate-200">{date}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-700 text-slate-300">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Time</p>
                  <p className="font-medium text-slate-200">
                    {time} EST Standard
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-slate-700 text-slate-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium text-slate-200">
                    {event.eventLocation}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">
                Organizer
              </h3>
              <p>{event.authorName}</p>
              {/* <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-slate-600 text-slate-200">
                    {authorInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-slate-200">{event.authorName}</p>
                  <p className="text-sm text-slate-400">{event.authorEmail}</p>
                </div>
              </div> */}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end space-x-3 border-t border-slate-700 pt-6">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
