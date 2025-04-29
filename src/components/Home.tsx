import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel"; // ✅ Make sure this is correctly referenced

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Those guys are sweeping the coast</h1>

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
