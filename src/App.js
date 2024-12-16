import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/component/layout.tsx";
import Page from "./pages/page.tsx";
import Services from "./pages/Services.jsx";
import ContactPage from "./component/Contact/ContectPage.jsx";
import AboutPage from "./component/About/AboutPage.tsx";
import Projects from "./component/projectsSection/Projects.jsx";
import Features from "./component/projectsSection/Featuress/Features.jsx";
import OffPlan from "./component/projectsSection/offplan/offplan/OffPlan.jsx";
import OffPlan2 from "./component/projectsSection/offplan/offplan/OffPlan2.jsx";
import Features2 from "./component/projectsSection/Featuress/Features2.jsx";
import Luxury from "./component/projectsSection/luxury/Luxury.jsx";
import Blog from "./component/Blogs/blog.jsx";
import SpecificBlog from "./component/Blogs/SpesificBlog.jsx";
import EmailInputScreen from "./pages/EmailPage.jsx";
import LoginComponent from "./pages/LoginPage.jsx";
import Properties from "./pages/Dashboard.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
// import AddProperty from "./pages/AddProperty.jsx"; 
import Team from "./component/DashboredCompnents/Team.jsx";
import AboutUs from "./component/DashboredCompnents/AboutUs.jsx";
import ContactUs from "./component/DashboredCompnents/ContactUs.jsx";
import Blogs from "./component/DashboredCompnents/Blog.jsx";
import AddBlog from "./component/DashboredCompnents/AddBlog.jsx";
import EditBlog from "./component/DashboredCompnents/EditBlog.jsx";
import EditServices from "./component/DashboredCompnents/EditServices.jsx";
import PrivateRoute from "./component/PrivateRoute.js";  // Import the PrivateRoute
import AddOffPlan from "./pages/AddOfPlan.jsx";
import Luxury2 from "./component/projectsSection/luxury/Luxury2.jsx";
import LuxuryDashboard from "../src/component/DashboredCompnents/Luxury.jsx";
import FeatureDashboard from "./component/DashboredCompnents/FeatureDashboard.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without authentication */}
        <Route path="/" element={<Layout><Page /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/Contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/About" element={<Layout><AboutPage /></Layout>} />
        <Route path="/Projects" element={<Layout><Projects /></Layout>} />
        <Route path="/Blog" element={<Layout><Blog /></Layout>} />
        <Route path="/SpecificBlog/:id" element={<Layout><SpecificBlog /></Layout>} />
        <Route
          path="/Projects/Features"
          element={
            <Layout>
              <Features />
            </Layout>
          }
        />
             <Route
          path="/Projects/Features2/:id"
          element={
            <Layout>
              <Features2 />
            </Layout>
          }
        />
        <Route
          path="/Projects/Off-Plan"
          element={
            <Layout>
              <OffPlan />
            </Layout>
          }
        />
        <Route
          path="/Projects/Off-Plan2/:id"
          element={
            <Layout>
              <OffPlan2 />
            </Layout>
          }
        />
         <Route
          path="/Projects/Luxury2/:id"
          element={
            <Layout>
              <Luxury2 />
            </Layout>
          }
        />
        <Route
          path="/Projects/Luxury"
          element={
            <Layout>
              <Luxury />
            </Layout>
          }
        />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/email" element={<EmailInputScreen />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          {/* All routes under this will require login */}
          <Route path="/Properties" element={<Properties />} />
          <Route path="/DashboardHome" element={<DashboardHome />} />
          <Route path="/add-of-plan" element={<AddOffPlan />} />
          {/* <Route path="/add-property" element={<AddProperty />} /> */}
          <Route path="/add-luxury" element={<LuxuryDashboard />} />
          <Route path="/add-feature" element={<FeatureDashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/edit-services" element={<EditServices />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
