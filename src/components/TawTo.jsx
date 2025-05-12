// TawTo.tsx
import { useEffect } from "react";

const TawTo = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // avoid SSR crash

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67bf083c1722de190a434d04/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    script.onerror = () => {
        console.error("Tawk.to failed to load.");
      };

    return () => {
      document.body.removeChild(script);
    };
  }, 
  
  []);

  return null;
};

export default TawTo;
