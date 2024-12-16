import React from "react";
import { Helmet } from "react-helmet";

export default function AboutLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>About | Joya Properties</title>
        <meta name="description" content="Learn more about Joya Properties, our mission, values, and the services we provide." />
        {/* يمكنك إضافة أي ميتا تاغ إضافية هنا */}
      </Helmet>
      {children}
    </>
  );
}
