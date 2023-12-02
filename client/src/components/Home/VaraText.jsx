import Vara from 'vara';
import React, { useEffect, useState } from 'react';

function VaraText({ darkMode }) {
  const [fontSize, setFontSize] = useState(getDynamicFontSize());

  const color = darkMode ? "white" : "black";

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getDynamicFontSize());
    };

    window.addEventListener('resize', handleResize);

    drawVara();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [color, fontSize]);

  function getDynamicFontSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 300) return 25;
    if (screenWidth < 400) return 30;
    if (screenWidth < 600) return 35;
    return 40;
  }

  function drawVara() {
    const container = document.getElementById('vara-container');
    container.innerHTML = '';
    const vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Harris Greenstein",
          fontSize: fontSize,
          strokeWidth: 1.0,
          color: color,
        },
      ]
    );
  }

  return <div id="vara-container" className=""></div>;
}

export default VaraText;

