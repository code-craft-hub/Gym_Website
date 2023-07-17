import React from "react";

import { pricing } from "../data";

import PlanList from "./PlanList";
const Pricing = () => {
  const { icon, title, plans } = pricing;

  return (
    <section className="section">
      {/* section title */}
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
      >
        <img src={icon} alt="" />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
