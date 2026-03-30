import React, { use } from "react";
import PricingCards from "./PricingCards";

function Pricing({ promisePricing }) {
  const pricingData = use(promisePricing);

  return (
    <div
      className="px-4
     py-15 md:py-20 md:px-16 "
    >
      <div className="text-center mb-15 text-3xl md:text-4xl font-bold ">
        <h2>Simple, Transparent Pricing</h2>
        <p className="text-sm text-gray-500 mt-2">
          Choose the perfect plan for your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {pricingData.map((pricingItem) => (
          <PricingCards key={pricingItem.id} pricingItem={pricingItem} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
