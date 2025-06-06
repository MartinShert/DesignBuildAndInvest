import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel"; // ✅ Make sure this is correctly referenced

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="home-intro">
        <h1>Welcome to Your Trusted Home Improvement Experts</h1>
        <p>
          At Design, Build and Invest we believe your home should reflect
          comfort, safety, and style. With over 25 years of experience serving
          homeowners in South Florida, we’re proud to offer reliable,
          top-quality services in roofing, remodeling, windows, flooring, and
          more.
        </p>
        <p>
          Whether you're planning a small upgrade or a full-scale renovation,
          our expert team is here to bring your vision to life — on time and on
          budget. Expect professionalism, craftsmanship, and customer-first care
          every step of the way.
        </p>
        <p>
          Explore our services, check out past projects, and see why so many
          homeowners trust us with their biggest investment — their home.
        </p>
      </div>

      <div className="d-flex justify-content-center gap-3 mb-5">
        {/* <Link to="/referral" className="btn btn-primary">
          Referral
        </Link>
        <Link to="/second" className="btn btn-outline-secondary">
          About
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
