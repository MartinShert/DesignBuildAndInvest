import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import "../styles.css";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Header />

      <main>
        {/* Main page content */}
        <Outlet />

        {/* Carousel only on home page */}
        {location.pathname === "/" && (
          <div className="carousel-container">
            <ImageCarousel />
          </div>
        )}
      </main>

      {/* You can add Footer here if you want */}
    </div>
  );
};

export default Layout;
