'use client'
import React from "react";
import Footer from "@/components/Footer";
import Swiperslider from "@/components/Swiperslider";
import "swiper/css";
import { Hero } from "./components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import BlackNav from "@/components/BlackNav";

const page = () => {
  return (
    <>
      <BlackNav />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
