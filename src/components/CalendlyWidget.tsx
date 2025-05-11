
import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget = ({ url }: CalendlyWidgetProps) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("async", "true");
    
    if (head && !document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      head.appendChild(script);
    }

    return () => {
      // Clean up script if component unmounts
      if (head && script.parentNode === head) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url={url} style={{ minWidth: 320, height: 700 }}></div>
  );
};

export default CalendlyWidget;
