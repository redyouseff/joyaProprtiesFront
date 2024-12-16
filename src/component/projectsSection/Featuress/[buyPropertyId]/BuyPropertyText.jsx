import React from "react";

function BuyPropertyText({ description }) {
  return (
    <div className="text fade-right transition-all duration-700 ease-in-out transform translate-x-10 inview:opacity-100 inview:translate-x-0 w-full dark:text-[#f1f0ec]">
      <h3 className="text-lg font-semibold mb-4">Description</h3>
      <p className="text-justify leading-8 text-[#a0b3b1] dark:text-[#f0ede6] lg:pr-5 lg:w-full w-[420px] px-3 -ml-[34px]">
        {description}
      </p>
      <a
        href="https://www.luxuryliving.ae/en/contact/"
        className="readmore mt-4 inline-block uppercase font-medium text-sm text-[#faf8f7] hover:text-[#f0ede6] transition"
      >
        Contact us now
      </a>
    </div>
  );
}

export default BuyPropertyText;
