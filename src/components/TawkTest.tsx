
import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    if (document.getElementById('tawkToScript')) return;

    const script = document.createElement('script');
    script.id = 'tawkToScript';
    script.src = 'https://embed.tawk.to/67bf083c1722de190a434d04/1il13gc31';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    script.onload = () => console.log('✅ Tawk.to loaded');
    script.onerror = () => console.error('❌ Failed to load Tawk.to');

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('tawkToScript');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default TawkTo;
