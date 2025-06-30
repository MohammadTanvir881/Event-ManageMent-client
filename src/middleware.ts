import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

const authRoutes = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://event-management-backend-three-murex.vercel.app/login`,
          request.url
        )
      );
    }
  }
};

export const config = {
  matcher: ["/events" , "/add-event" , "/my-event"],
};
