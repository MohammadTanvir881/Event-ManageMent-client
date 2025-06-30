"use server";
import { FieldValues } from "react-hook-form";

// create user
export const createEvent = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/event`, {
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