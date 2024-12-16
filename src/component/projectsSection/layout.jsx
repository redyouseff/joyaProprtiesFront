import React from "react";
import { Helmet } from "react-helmet";

export default function ProjectsLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Projects | Joya Properties</title>
      </Helmet>
      {children}
    </>
  );
}
