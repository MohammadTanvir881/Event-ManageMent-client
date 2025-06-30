"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock, MapPin, Users, PenLine } from "lucide-react";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createEvent, updateEvent } from "@/services/EventServices";
import { toast } from "sonner";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";

export default function UpdateEventForm({ event }: { event: any }) {
  const { user } = useUser();
  const router = useRouter();
  
  // Initialize formData with default values from the event prop
  const [formData, setFormData] = useState({
    eventTitle: event?.eventTitle || "",
    authorName: event?.authorName || "",
    eventDate: event?.eventDate || "", // Now stored as string
    eventTime: event?.eventTime || "10:00",
    eventLocation: event?.eventLocation || "",
    eventDescription: event?.eventDescription || "",
    attendeeCount: event?.attendeeCount || 0,
  });

  // Update form data when event prop changes
  useEffect(() => {
    if (event) {
      setFormData({
        eventTitle: event.eventTitle || "",
        authorName: event.authorName || "",
        eventDate: event.eventDate || "",
        eventTime: event.eventTime || "10:00",
        eventLocation: event.eventLocation || "",
        eventDescription: event.eventDescription || "",
        attendeeCount: event.attendeeCount || 0,
      });
    }
  }, [event]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      // Convert Date to ISO string and store it
      setFormData((prev) => ({
        ...prev,
        eventDate: date.toISOString(),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
        const res = await updateEvent(event._id, {
          ...formData});
          if(res.success) {
            toast.success("Event updated successfully!");
            router.push("/my-event");

          }
          else {
            toast.error("Failed to update event. Please try again.");
          }
    } catch (error) {
        console.error("Error updating event:", error);
        toast.error("An error occurred while updating the event.");
    }
  };

  // Parse the string date back to Date object for display
  const displayDate = formData.eventDate
    ? parseISO(formData.eventDate)
    : undefined;

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="border-slate-700 bg-slate-800 shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-white">
                  Update Event
                </CardTitle>
                <CardDescription className="text-slate-400 mt-2">
                  Update the details below for your event
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="bg-indigo-900/30 text-indigo-300"
              >
                Edit Mode
              </Badge>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-8">
              {/* Basic Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <PenLine className="h-5 w-5 text-indigo-400" />
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      className="text-slate-300 flex items-center gap-1"
                      htmlFor="eventTitle"
                    >
                      Event Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="eventTitle"
                      name="eventTitle"
                      value={formData.eventTitle}
                      onChange={handleChange}
                      placeholder="Event Title"
                      className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-400 h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      className="text-slate-300 flex items-center gap-1"
                      htmlFor="authorName"
                    >
                      Organizer Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="authorName"
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                      placeholder="Organizer Name"
                      className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-400 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    className="text-slate-300 flex items-center gap-1"
                    htmlFor="eventDescription"
                  >
                    Event Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="eventDescription"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleChange}
                    placeholder="Event description..."
                    className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-400 min-h-[140px]"
                    required
                  />
                </div>
              </div>

              {/* Date & Location Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-indigo-400" />
                  Date & Location
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-slate-300 flex items-center gap-1">
                      Event Date <span className="text-red-500">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-slate-700/50 border-slate-600 hover:bg-slate-600 text-white h-12"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-slate-300" />
                          {displayDate ? (
                            format(displayDate, "PPP")
                          ) : (
                            <span>Select a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-600 shadow-lg">
                        <Calendar
                          mode="single"
                          selected={displayDate}
                          onSelect={handleDateSelect}
                          initialFocus
                          className="bg-slate-800"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label
                      className="text-slate-300 flex items-center gap-1"
                      htmlFor="eventTime"
                    >
                      Event Time <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="eventTime"
                        name="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white pl-10 h-12"
                        required
                      />
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    className="text-slate-300 flex items-center gap-1"
                    htmlFor="eventLocation"
                  >
                    <MapPin className="h-4 w-4" /> Location{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="Event location"
                    className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-400 h-12"
                    required
                  />
                </div>
              </div>

              {/* Attendance Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-400" />
                  Attendance
                </h3>
                <div className="space-y-2">
                  <Label
                    className="text-slate-300 flex items-center gap-1"
                    htmlFor="attendeeCount"
                  >
                    Expected Attendees
                  </Label>
                  <Input
                    id="attendeeCount"
                    name="attendeeCount"
                    type="number"
                    value={formData.attendeeCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        attendeeCount: parseInt(e.target.value) || 0,
                      })
                    }
                    className="bg-slate-700/50 border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white w-32 h-12"
                    min="0"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Set to 0 if you don't have an estimate yet
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end border-t border-slate-700 pt-6">
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 font-medium"
                >
                  Update Event
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}