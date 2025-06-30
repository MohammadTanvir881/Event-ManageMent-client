"use server";
import { FieldValues } from "react-hook-form";

// create user
export const createEvent = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// get all events
export const getAllEvents = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// get single events
export const getSigleEvents = async (enevtId: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/events/${enevtId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// update event
export const updateEvent = async (eventId: string, userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
