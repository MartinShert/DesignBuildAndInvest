import React from "react";
import "../assets/css/styles.css";

const ThirdPage: React.FC = () => {
  return (
    <div className="Offerings">
      <h1>Services</h1>

      <p style={{ textAlign: "center" }}>Browse our expert services.</p>

      <ul>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Roofing
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Siding and Trim
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Doors and Windows
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Walls and Ceilings
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Kitchen and Bathroom
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("https://via.placeholder.com/500x300", "_blank")
            }
          >
            Flooring
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThirdPage;
