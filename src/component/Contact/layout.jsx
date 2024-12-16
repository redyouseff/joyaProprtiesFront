import React from "react";
import { Helmet } from "react-helmet";

export default function ContactLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Contact | Joya Properties</title>
      </Helmet>
      {children}
    </>
  );
}
