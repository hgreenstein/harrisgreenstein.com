import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Create a script element
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(scriptTag);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

  }, []);

  return null;
};

export default GoogleAnalytics;

