"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Mail, User, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";

const events = [
  {
    attendeeCount: 5,
    authorEmail: "tanvirrashid881@gmail.com",
    authorName: "Casey Le",
    createdAt: "2025-06-30T04:22:57.427Z",
    eventDate: "2025-07-03T18:00:00.000Z",
    eventDescription: "Tenetur a ipsam temp",
    eventLocation: "Eu fugit deleniti e",
    eventTime: "13:44",
    eventTitle: "Porro qui nisi sed q"
  },
    {
    attendeeCount: 5,
    authorEmail: "tanvirrashid881@gmail.com",
    authorName: "Casey Le",
    createdAt: "2025-06-30T04:22:57.427Z",
    eventDate: "2025-07-03T18:00:00.000Z",
    eventDescription: "Tenetur a ipsam temp",
    eventLocation: "Eu fugit deleniti e",
    eventTime: "13:44",
    eventTitle: "Porro qui nisi sed q"
  }
  // Add more events here as needed
];

export default function MyEventsPageTable() {
  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <Card className="border-slate-700 bg-slate-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Calendar className="h-6 w-6 text-indigo-400" />
              My Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-slate-700">
              <Table>
                <TableHeader className="bg-slate-700/50">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-slate-300">Event Title</TableHead>
                    <TableHead className="text-slate-300">Date & Time</TableHead>
                    <TableHead className="text-slate-300">Location</TableHead>
                    <TableHead className="text-slate-300">Organizer</TableHead>
                    <TableHead className="text-slate-300 text-right">Attendees</TableHead>
                    <TableHead className="text-slate-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                      <TableCell className="font-medium text-white">
                        <div className="flex flex-col">
                          <span>{event.eventTitle}</span>
                          <span className="text-sm text-slate-400 line-clamp-1">{event.eventDescription}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          <div className="flex flex-col">
                            <span className="text-white">{format(parseISO(event.eventDate), "PPP")}</span>
                            <span className="text-sm text-slate-400 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.eventTime}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          <span className="text-white">{event.eventLocation}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-slate-400" />
                            <span className="text-white">{event.authorName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-slate-400" />
                            <span className="text-sm text-slate-400">{event.authorEmail}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline" className="border-indigo-500 text-indigo-300">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendeeCount}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <button className="text-sm text-indigo-400 hover:text-indigo-300 px-2 py-1 rounded hover:bg-slate-700">
                            View
                          </button>
                          <button className="text-sm text-slate-400 hover:text-slate-300 px-2 py-1 rounded hover:bg-slate-700">
                            Edit
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Empty state */}
            {events.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calendar className="h-12 w-12 text-slate-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-300">No events found</h3>
                <p className="text-slate-500 mt-1">Create your first event to get started</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Create Event
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}