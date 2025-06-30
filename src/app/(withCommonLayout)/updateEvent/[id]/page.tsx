import UpdateEventForm from "@/components/UpdateEventForm/UpdateEventForm";
import { getSigleEvents } from "@/services/EventServices";
import React from "react";

const UpdateEventPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const {data : event} = await getSigleEvents(id);
  console.log("Event Data for Update:", event);
  return (
    <div>
      <UpdateEventForm event={event}></UpdateEventForm>
    </div>
  );
};

export default UpdateEventPage;
