import React from "react";
import { Helmet } from "react-helmet";

export default function FeaturesProjectsLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Features Projects | Joya Properties</title>
      </Helmet>
      {children}
    </>
  );
}
