"use client";
import React, { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(9800000);
  const [deposit, setDeposit] = useState(1960000);
  const [mortgagePeriod, setMortgagePeriod] = useState(20);
  const [interestRate, setInterestRate] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPurchaseCost, setTotalPurchaseCost] = useState(0);
  const [totalRequiredUpfront, setTotalRequiredUpfront] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handlePropertyPriceChange = (e) => setPropertyPrice(Number(e.target.value));
  const handleDepositChange = (e) => setDeposit(Number(e.target.value));
  const handleMortgagePeriodChange = (e) => setMortgagePeriod(Number(e.target.value));
  const handleInterestRateChange = (e) => setInterestRate(Number(e.target.value));

  useEffect(() => {
    const loanAmount = propertyPrice - deposit;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = mortgagePeriod * 12;
    const monthlyPaymentCalc =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    setMonthlyPayment(monthlyPaymentCalc || 0);
    setTotalPurchaseCost(propertyPrice);
    setTotalRequiredUpfront(deposit);
  }, [propertyPrice, deposit, mortgagePeriod, interestRate]);

  return (
    <>
      {/* <div className="px-4 lg:px-0 flex items-center justify-center mt-10 mb-10">
        <div className="max-w-3xl p-6 bg-[#04453d] rounded-3xl shadow-lg text-center text-[#faf8f7] animate-fade-in-slow">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Mortgage Calculator</h1>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            Discover the ideal mortgage options tailored for your needs in Dubai. Whether you're a first-time buyer or an experienced investor, our comprehensive mortgage calculator simplifies the process of finding the best financing solutions for your property.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            Let our expert mortgage advisors assist you in navigating the complexities of the mortgage landscape. From understanding rates to assessing eligibility, we are here to support you every step of the way in making informed decisions about your financial future.
          </p>
        </div>
      </div> */}

      <div className="text-[#faf8f7] p-6 my-10 rounded-2xl bg-[#111612] animate-slide-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-2xl shadow-2xl shadow-black">
          <div className="space-y-8">
            <InputSlider label="Property Price" value={propertyPrice} onChange={handlePropertyPriceChange} min={200000} max={50000000} step={50000} unit="AED" />
            <InputSlider label="Deposit" value={deposit} onChange={handleDepositChange} min={1960000} max={7840000} step={5000} unit="AED" />
            <InputSlider label="Mortgage Period" value={mortgagePeriod} onChange={handleMortgagePeriodChange} min={1} max={25} unit="Years" />
            <InputSlider label="Interest Rate" value={interestRate} onChange={handleInterestRateChange} min={1} max={10} step={0.01} unit="%" />
          </div>

          <div className="bg-[#022b29] p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-semibold text-white mb-4">Monthly Payment:</div>
            <h3 className="text-4xl my-4 text-[#a0b3b1]">AED {monthlyPayment.toFixed(2)}</h3>
            <button
              className="w-full bg-[#698f8c] text-[#faf8f7] py-3 rounded-lg shadow-lg hover:bg-[#a0b3b1] transition-all duration-200 mb-6"
              onClick={toggleModal}
            >
              View Mortgage Costs and Fees
            </button>

            <div className="border-t border-gray-700 mt-4 pt-4 space-y-4">
              <CostItem label="Total Purchase Costs" value={totalPurchaseCost} />
              <CostItem label="Total Required Upfront" value={totalRequiredUpfront} />
            </div>

            <div className="space-y-4 mt-8">
  <h3 className="text-xl font-semibold text-white">Ready to take the next step?</h3>
  <p className="text-[#a0b3b1]">
    Our team of experts can help you find the best mortgage rate for your purchase journey.
  </p>
  <a
    href="https://wa.me/971585976060"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block bg-[#698f8c] text-center text-[#faf8f7] py-3 rounded-lg shadow-lg hover:bg-[#a0b3b1] transition-all duration-200"
  >
    Get pre-approved
  </a>
</div>

          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal} />
      )}
    </>
  );
};

const InputSlider = ({ label, value, onChange, min, max, step = 1, unit }) => (
  <div className="space-y-4">
    <label className="text-xl font-semibold text-white">{label}</label>
    <div>
      <div className="flex items-center justify-between">
        <input
          className="w-1/2 bg-[#022b29] text-white px-4 py-2 rounded-md"
          type="text"
          value={value.toLocaleString()}
          onChange={onChange}
        />
        <p className="text-white">{unit}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className="w-full mt-2 cursor-pointer range-slider"
        onChange={onChange}
        style={{
          background: `linear-gradient(to right, #3d6a64 ${(value - min) / (max - min) * 100}%, #faf8f7 ${(value - min) / (max - min) * 100}%)`
        }}
      />
      <div className="flex justify-between text-sm text-[#a0b3b1]">
        <p>{min.toLocaleString()}</p>
        <p>{max.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

const CostItem = ({ label, value }) => (
  <div className="flex justify-between text-lg font-semibold text-[#a0b3b1]">
    <p>{label}</p>
    <p>{value.toLocaleString()} AED</p>
  </div>
);

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-200">
    <div className="bg-[#404740] text-[#faf8f7] w-[550px] rounded-lg shadow-lg p-6 relative">
      <button className="absolute right-4 top-4 text-[#faf8f7] hover:text-red-400" onClick={onClose}>
        ✕
      </button>
      <h4 className="text-2xl font-extrabold mb-4">Mortgage Costs and Fees</h4>
      <div className="space-y-3">
        {costItems.map(({ title, tooltip, amount }) => (
          <div key={title} className="flex justify-between items-center border-b border-gray-600 py-2">
            <span className="flex items-center gap-2">
              {title}
              <div className="tooltip">
                <i className="fa-solid fa-info-circle text-sm cursor-pointer"></i>
                <span className="tooltip-text bg-gray-700 text-white p-2 rounded text-xs">{tooltip}</span>
              </div>
            </span>
            <span>{amount} AED</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#f0ede6] mt-4">
        *This calculator is for illustration purposes only and should be used as a guide; the rates shown are subject to change.
      </p>
    </div>
  </div>
);

const costItems = [
  { title: "Land Department Fee", tooltip: "4% of purchase price + 580", amount: "1,176,580" },
  { title: "Trustee Office Fee incl. 5% VAT", tooltip: "If below 500k, the fee is 2k + 5% VAT. Above 500k, the fee is 4k + 5% VAT.", amount: "4,200" },
  { title: "Mortgage Registration", tooltip: "0.25% of loan + AED 290", amount: "59,090" },
  { title: "Real Estate Agency Fee incl. 5% VAT", tooltip: "2% of purchase price + 5% VAT", amount: "617,400" },
  { title: "Bank Arrangement Fee", tooltip: "Up to 1% of loan amount to be agreed directly with lender", amount: "235,200" },
  { title: "Valuation", tooltip: "Depending on bank", amount: "3,000" },
  { title: "Conveyancing Fee incl. 5% VAT", tooltip: "Sales progression", amount: "8,400" },
  { title: "TOTAL PURCHASE COSTS", tooltip: "", amount: "2,103,870" },
  { title: "TOTAL REQUIRED UPFRONT", tooltip: "Deposit + total purchase costs", amount: "7,983,870" }
];

export default MortgageCalculator;
