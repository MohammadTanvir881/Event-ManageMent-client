import { CategoriesSection } from "@/components/HomePage/CatagoriesSection/CategoriesSection";
import { CTASection } from "@/components/HomePage/CTASection/CTASection";
import { HeroSection } from "@/components/HomePage/HeroSection/HeroSection";
import { HowItWorks } from "@/components/HomePage/HowItWorks/HowItWorks";
import { TestimonialsSection } from "@/components/HomePage/Testimonials/Testimonials";
import { UpcomingEvents } from "@/components/HomePage/UpcommingEvent/UpcommingEvent";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <UpcomingEvents></UpcomingEvents>
      <CategoriesSection></CategoriesSection>
      <TestimonialsSection></TestimonialsSection>
      <CTASection></CTASection>
    </div>
  );
};

export default HomePage;
