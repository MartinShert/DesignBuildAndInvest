import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import "../assets/css/global.css";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className="page-wrapper"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      <main style={{ flex: "1 0 auto" }}>
        <Outlet />
      </main>

      {/* Call Now button on every page, above the carousel */}
      <button className="call-now-button">Call Now!</button>

      {location.pathname === "/" && (
        <footer className="carousel-footer" style={{ flexShrink: 0 }}>
          <ImageCarousel />
        </footer>
      )}
    </div>
  );
};

export default Layout;
