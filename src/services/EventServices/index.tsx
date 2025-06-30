"use server";
import { revalidateTag } from "next/cache";

export const createEvent = async (userData: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      next: { tags: ['events'] } // Cache tag for invalidation
    });
    const result = await res.json();

    revalidateTag('events'); // Revalidate events list
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const getAllEvents = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { 
        tags: ['events'], // Cache tag
        // revalidate: 60 // Revalidate every 60 seconds
      }
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const getSigleEvents = async (eventId: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/events/${eventId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { 
          tags: [`events`], // Individual event tag
          revalidate: 60 
        }
      }
    );
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const updateEvent = async (eventId: string, userData: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      next: { 
        tags: ['events'] // Both collection and individual tags
      }
    });
    const result = await res.json();

    revalidateTag('events'); // Revalidate events list
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      next: { 
        tags: ['events'] 
      }
    });
    const result = await res.json();

    revalidateTag('events');
    revalidateTag(`event-${eventId}`);
    return result;
  } catch (err: any) {
    return Error(err);
  }
};