import React from "react";

const SecondPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>

      <p>
        We are a Home Repair Expert Contractor and take pride in offering the
        customers the best in options and pricing. We believe in giving the
        customer options and recommendations to let them have control over their
        repair project down to materials used to scope of work.
      </p>

      <h2>In business for you...</h2>
      <ul className="small-list">
        <li>Serving SF Homeowners for over 25 proud years</li>
        <li>Protecting your Home / Repairing your home</li>
        <li>Expedited Document / Insurance Processing</li>
        <li>Unmatched dedication to Excellence</li>
      </ul>

      <h3>Don't wait to call those guys today!</h3>
    </div>
  );
};

export default SecondPage;
