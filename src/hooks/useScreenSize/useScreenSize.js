import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const mediumScreenWidth = 1920;
  const smallScreenWidth = 1280;

  const handleResize = () => {
    const newWidth = window.innerWidth;
    let currentSize = "";

    if (newWidth >= mediumScreenWidth) {
      currentSize = "Large";
    } else if (newWidth < mediumScreenWidth && newWidth >= smallScreenWidth) {
      currentSize = "Medium";
    } else if (newWidth <= smallScreenWidth) {
      currentSize = "Small";
    } else {
      currentSize = "Extra Small";
    }
    setScreenSize(currentSize);
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [width, screenSize];
};
