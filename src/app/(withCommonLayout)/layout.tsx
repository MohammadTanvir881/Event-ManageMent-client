

import { Footer } from "@/components/shared/Footer/Footer";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen my-5">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
