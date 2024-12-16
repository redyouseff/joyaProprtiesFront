import React from 'react';
import HomePageSlider from '../component/DashboredCompnents/HomePageSlider';
import SecondSection from '../component/DashboredCompnents/SecondSection';
import Sidebar from '../component/DashboredCompnents/SideBar';
import Testimonials from '../component/DashboredCompnents/Testimonials';
import Partners from '../component/DashboredCompnents/Partners';

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the Left */}
      <Sidebar />
      
      {/* Main Content on the Right */}
      <div className="flex-1">
        <HomePageSlider />
        <SecondSection />
        <Testimonials />
        <Partners />
      </div>
    </div>
  );
};

export default DashboardHome;
