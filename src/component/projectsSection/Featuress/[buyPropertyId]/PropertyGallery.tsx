// components/PropertyGallery.js
import React from "react";
import BuyPropertyImages from "./BuyPropertyImages";

const PropertyGallery = ({ images }) => {
  return (
    <div className="px-4">
      <BuyPropertyImages images={images} />
    </div>
  );
};

export default PropertyGallery;
