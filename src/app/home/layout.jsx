import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default layout;
