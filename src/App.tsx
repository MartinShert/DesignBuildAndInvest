import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ReferralForm from "./components/ReferralForm"; // ✅

import "./styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="referral" element={<ReferralForm />} />{" "}
          {/* WITHOUT "S" */}
        </Route>
      </Routes>
      {/* Here’s your logo added */}
      {/* <img src="https://i.imgur.com/yQrPr6C.png" alt="Logo" /> */}
    </Router>
  );
};

export default App;
