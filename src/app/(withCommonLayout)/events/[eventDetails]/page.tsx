import EventDetailsPage from "@/components/EventDetailsPage/EventDetailsPage";
import { getSigleEvents } from "@/services/EventServices";
import { get } from "http";
import React from "react";

const EventDetails = async ({
  params,
}: {
  params: Promise<{ eventDetails: string }>;
}) => {
  const { eventDetails } = await params;
  console.log("Event Details:", eventDetails);
  const {data: event} = await getSigleEvents(eventDetails);
  console.log("Event Data:", event);
  return <div>
    <EventDetailsPage event={event}></EventDetailsPage>
  </div>;
};

export default EventDetails;
