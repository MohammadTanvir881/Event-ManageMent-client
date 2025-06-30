"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Search, Filter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  format,
  isToday,
  isThisWeek,
  isThisMonth,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subWeeks,
  subMonths,
} from "date-fns";
import { getAllEvents, updateEvent } from "@/services/EventServices";
import { useUser } from "@/context/userContext";
import { toast } from "sonner";
import { createJoinedEvent, getJoinedEvents } from "@/services/JoinedEventServices";

interface Event {
  _id: string;
  eventTitle: string;
  authorName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
  attendeeCount: number;
  attendees: string[];
  createdAt: string;
  updatedAt: string;
}

interface JoinedEvent {
  _id: string;
  eventId: string;
  userEmail: string;
}

export default function EventsPage() {
  const { user } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [joiningEventId, setJoiningEventId] = useState<string | null>(null);
  const [joinedEvents, setJoinedEvents] = useState<JoinedEvent[]>([]);

  // Check if user has joined a specific event
  const hasUserJoined = (eventId: string) => {
    return joinedEvents.some(
      (joinedEvent) => joinedEvent.eventId === eventId && joinedEvent.userEmail === user?.userEmail
    );
  };

  // Date filtering functions
  const isLastWeek = (date: Date): boolean => {
    const now = new Date();
    const startOfLastWeek = startOfWeek(subWeeks(now, 1));
    const endOfLastWeek = endOfWeek(subWeeks(now, 1));
    return date >= startOfLastWeek && date <= endOfLastWeek;
  };

  const isLastMonth = (date: Date): boolean => {
    const now = new Date();
    const startOfLastMonth = startOfMonth(subMonths(now, 1));
    const endOfLastMonth = endOfMonth(subMonths(now, 1));
    return date >= startOfLastMonth && date <= endOfLastMonth;
  };

  const handleJoinEvent = async (eventId: string) => {
    if (!user) {
      toast.error("Please login to join events");
      return;
    }

    try {
      setJoiningEventId(eventId);
      const event = events.find((e) => e._id === eventId);
      if (!event) return;

      // Create joined event record
      const userData = {
        userEmail: user.userEmail,
        eventId,
      };
      const res = await createJoinedEvent(userData);
      
      if (!res.success) {
        throw new Error("Failed to create joined event record");
      }

      // Update the main event attendees
      const { data: updatedEvent } = await updateEvent(eventId, {
        attendeeCount: event.attendeeCount + 1,
        attendees: [...event.attendees, user._id],
      });

      // Update both events and joinedEvents state
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId ? updatedEvent : event
        )
      );
      
      setJoinedEvents((prev) => [...prev, res.data]);
      
      toast.success("Successfully joined the event");
    } catch (error) {
      toast.success("Successfully joined the event");
      window.location.reload();
      console.log(error);
    } finally {
      setJoiningEventId(null);
    }
  };

  // Fetch events and joined events
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [{ data: eventsData }, { data: joinedEventsData }] = await Promise.all([
          getAllEvents(),
          getJoinedEvents()
        ]);

        // Sort events by date (newest first)
        const sortedEvents = eventsData.sort((a: Event, b: Event) => {
          return new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime();
        });

        setEvents(sortedEvents);
        setFilteredEvents(sortedEvents);
        setJoinedEvents(joinedEventsData);
      } catch (error) {
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let result = [...events];

    if (searchQuery) {
      result = result.filter((event) =>
        event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (dateFilter !== "all") {
      result = result.filter((event) => {
        const eventDate = new Date(event.eventDate);
        switch (dateFilter) {
          case "today": return isToday(eventDate);
          case "thisWeek": return isThisWeek(eventDate);
          case "lastWeek": return isLastWeek(eventDate);
          case "thisMonth": return isThisMonth(eventDate);
          case "lastMonth": return isLastMonth(eventDate);
          default: return true;
        }
      });
    }

    setFilteredEvents(result);
  }, [searchQuery, dateFilter, events]);

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">All Events</h1>
          <p className="text-slate-400">
            Discover and join exciting events in your community
          </p>
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
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="lastWeek">Last Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="lastMonth">Last Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-800 rounded-lg border border-slate-700 p-6 animate-pulse"
              >
                <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2 mb-6"></div>
                <div className="space-y-3 mb-4">
                  <div className="h-4 bg-slate-700 rounded w-full"></div>
                  <div className="h-4 bg-slate-700 rounded w-full"></div>
                  <div className="h-4 bg-slate-700 rounded w-full"></div>
                </div>
                <div className="h-10 bg-slate-700 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const isJoining = joiningEventId === event._id;
              const userHasJoined = hasUserJoined(event._id);

              return (
                <div
                  key={event._id}
                  className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-semibold text-white">
                        {event.eventTitle}
                      </h2>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          new Date(event.eventDate) > new Date()
                            ? "bg-indigo-900/30 text-indigo-300"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {new Date(event.eventDate) > new Date()
                          ? "Upcoming"
                          : "Past"}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-slate-400 mb-3">
                      <span className="font-medium text-slate-300">
                        Hosted by {event.authorName}
                      </span>
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
                        {event.attendeeCount}{" "}
                        {event.attendeeCount === 1 ? "attendee" : "attendees"}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm mb-6">
                      {event.eventDescription}
                    </p>

                    {userHasJoined ? (
                      <div className="text-green-500 text-sm mb-4 flex items-center">
                        <Check className="inline-block mr-1" />
                        You have joined this event
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleJoinEvent(event._id)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700"
                        disabled={!user || isJoining}
                      >
                        {isJoining ? "Processing..." : "Join Event"}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium text-white">No events found</h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}