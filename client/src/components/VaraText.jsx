import Vara from 'vara';
import React, {useEffect} from 'react';
function VaraText({darkMode}) {
  const color = darkMode ? "white" : "black";
  useEffect(() => {
    const container = document.getElementById('vara-container');
    container.innerHTML = '';
    const vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Harris Greenstein",
          fontSize: 40,
          strokeWidth: 1.0,
          color: color,
        },
      ]
    );
  }, [color]);

  return <div id="vara-container" className=""></div>;
}
export default VaraText;
