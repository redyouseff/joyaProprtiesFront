import React, { useEffect } from "react";

export default function FeatureProjectLayout({ children, buyPropertyId }) {
  useEffect(() => {
    if (buyPropertyId) {
      const title = buyPropertyId
        .split("__")[0]
        .replace(/-/g, " ")
        .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      
      document.title = `${title} | Joya Properties`;
    } else {
      document.title = "Joya Properties";
    }
  }, [buyPropertyId]);

  return <>{children}</>;
}
