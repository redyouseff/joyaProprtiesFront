import React, { useEffect } from "react";

export default function FeatureProjectLayout({ children, buyPropertyId }) {
  useEffect(() => {
    // تحديث العنوان بناءً على `buyPropertyId`
    const title = buyPropertyId
      ? buyPropertyId
          .split("__")[0]
          .replace(/-/g, " ")
          .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
      : "Joya Properties";
      
    document.title = `${title} | Joya Properties`;
  }, [buyPropertyId]);

  return <>{children}</>;
}
