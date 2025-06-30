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
      <MyEventsPageTable AllEvents={AllEvents}></MyEventsPageTable>
    </div>
  );
};

export default MyEventPage;
