"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, isToday, isThisWeek, isThisMonth } from "date-fns";

// Utility function to check if a date is in the last week
function isLastWeek(date: Date): boolean {
  const now = new Date();
  const startOfThisWeek = new Date(now);
  startOfThisWeek.setDate(now.getDate() - now.getDay());
  startOfThisWeek.setHours(0, 0, 0, 0);

  const startOfLastWeek = new Date(startOfThisWeek);
  startOfLastWeek.setDate(startOfThisWeek.getDate() - 7);

  const endOfLastWeek = new Date(startOfThisWeek);
  endOfLastWeek.setMilliseconds(-1);

  return date >= startOfLastWeek && date <= endOfLastWeek;
}

// Utility function to check if a date is in the last month
function isLastMonth(date: Date): boolean {
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  let lastMonth = thisMonth - 1;
  let lastMonthYear = thisYear;
  if (lastMonth < 0) {
    lastMonth = 11;
    lastMonthYear = thisYear - 1;
  }

  return date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear;
}

interface Event {
  id: string;
  eventTitle: string;
  authorName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
  attendeeCount: number;
  joined?: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string>("all");

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchEvents = async () => {
      // Replace with your actual API call
      const mockEvents: Event[] = [
        {
          id: "1",
          eventTitle: "Tech Conference 2023",
          authorName: "Jane Smith",
          eventDate: "2023-12-15",
          eventTime: "09:00",
          eventLocation: "Convention Center",
          eventDescription: "Annual technology conference with keynote speakers and workshops.",
          attendeeCount: 120,
        },
        {
          id: "2",
          eventTitle: "Community Meetup",
          authorName: "John Doe",
          eventDate: "2023-12-10",
          eventTime: "18:30",
          eventLocation: "Downtown Cafe",
          eventDescription: "Casual meetup for community members to network and share ideas.",
          attendeeCount: 45,
        },
        {
          id: "3",
          eventTitle: "Product Launch",
          authorName: "Alex Johnson",
          eventDate: new Date().toISOString().split('T')[0], // Today's date
          eventTime: "14:00",
          eventLocation: "Tech Hub",
          eventDescription: "Launch of our new product line with live demos.",
          attendeeCount: 85,
        },
        {
          id: "4",
          eventTitle: "Workshop Series",
          authorName: "Sarah Williams",
          eventDate: "2023-11-28",
          eventTime: "10:00",
          eventLocation: "Learning Center",
          eventDescription: "Hands-on workshops for skill development.",
          attendeeCount: 32,
        },
      ];

      // Sort events by date and time (newest first)
      const sortedEvents = mockEvents.sort((a, b) => {
        const dateA = new Date(`${a.eventDate}T${a.eventTime}`);
        const dateB = new Date(`${b.eventDate}T${b.eventTime}`);
        return dateB.getTime() - dateA.getTime();
      });

      setEvents(sortedEvents);
      setFilteredEvents(sortedEvents);
    };

    fetchEvents();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let result = [...events];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(event =>
        event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply date filter
    if (dateFilter !== "all") {
      result = result.filter(event => {
        const eventDate = new Date(event.eventDate);
        
        switch (dateFilter) {
          case "today":
            return isToday(eventDate);
          case "thisWeek":
            return isThisWeek(eventDate);
          case "lastWeek":
            return isLastWeek(eventDate);
          case "thisMonth":
            return isThisMonth(eventDate);
          case "lastMonth":
            return isLastMonth(eventDate);
          default:
            return true;
        }
      });
    }
    
    setFilteredEvents(result);
  }, [searchQuery, dateFilter, events]);

  const handleJoinEvent = (eventId: string) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId
          ? {
              ...event,
              attendeeCount: event.joined ? event.attendeeCount - 1 : event.attendeeCount + 1,
              joined: !event.joined,
            }
          : event
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">All Events</h1>
          <p className="text-slate-400">Discover and join exciting events in your community</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-slate-800 p-6 rounded-lg border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search events..."
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus-visible:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-700/80">
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="hover:bg-slate-700 focus:bg-slate-700">All Dates</SelectItem>
                  <SelectItem value="today" className="hover:bg-slate-700 focus:bg-slate-700">Today</SelectItem>
                  <SelectItem value="thisWeek" className="hover:bg-slate-700 focus:bg-slate-700">This Week</SelectItem>
                  <SelectItem value="lastWeek" className="hover:bg-slate-700 focus:bg-slate-700">Last Week</SelectItem>
                  <SelectItem value="thisMonth" className="hover:bg-slate-700 focus:bg-slate-700">This Month</SelectItem>
                  <SelectItem value="lastMonth" className="hover:bg-slate-700 focus:bg-slate-700">Last Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-white">{event.eventTitle}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      new Date(event.eventDate) > new Date() 
                        ? "bg-indigo-900/30 text-indigo-300" 
                        : "bg-slate-700 text-slate-300"
                    }`}>
                      {new Date(event.eventDate) > new Date() ? "Upcoming" : "Past"}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-400 mb-3">
                    <span className="font-medium text-slate-300">Hosted by {event.authorName}</span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                      {format(new Date(event.eventDate), "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="h-4 w-4 mr-2 text-slate-500" />
                      {event.eventTime}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                      {event.eventLocation}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Users className="h-4 w-4 mr-2 text-slate-500" />
                      {event.attendeeCount} {event.attendeeCount === 1 ? "attendee" : "attendees"}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6">{event.eventDescription}</p>
                  
                  <Button
                    onClick={() => handleJoinEvent(event.id)}
                    className={`w-full ${
                      event.joined 
                        ? "bg-slate-700 text-slate-300 hover:bg-slate-600" 
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {event.joined ? "✓ Joined" : "Join Event"}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-medium text-white">No events found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}