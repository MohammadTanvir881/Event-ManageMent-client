import MyEventsPageTable from "@/components/MyEventPage/MyEventsTable";
import { getCurrentUser } from "@/services/AuthServices";
import { getAllEvents } from "@/services/EventServices";
import React from "react";

const MyEventPage = async () => {
  const user = await getCurrentUser();
  
  const { data: AllEvents } = await getAllEvents();
  console.log("all events", AllEvents);
  return (
    <div>
      <h1 className="text-white">This is My Event Page</h1>
      <MyEventsPageTable></MyEventsPageTable>
    </div>
  );
};

export default MyEventPage;
