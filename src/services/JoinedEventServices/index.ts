"use server";
import { revalidateTag } from "next/cache";

export const createJoinedEvent = async (userData: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/joined`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      next: { tags: ["events"] }, // Cache tag for invalidation
    });
    const result = await res.json();

    revalidateTag("events"); // Revalidate events list
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const getJoinedEvents = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/joined`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["events"] }, // Cache tag for invalidation
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
