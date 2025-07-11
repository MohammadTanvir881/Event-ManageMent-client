"use server"
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get('token')?.value;
    let decodedData = null;
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    }
    return null;
  };
  