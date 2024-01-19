import { useState, useEffect } from "react";

enum screenType {
  large = "lg",
  medium = "md",
  small = "sm",
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const mediumScreenWidth = 1920;
  const smallScreenWidth = 1280;

  const handleResize = () => {
    const newWidth = window.innerWidth;
    let currentSize = "";

    if (newWidth >= mediumScreenWidth) {
      currentSize = screenType.large;
    } else if (newWidth < mediumScreenWidth && newWidth >= smallScreenWidth) {
      currentSize = screenType.medium;
    } else if (newWidth <= smallScreenWidth) {
      currentSize = screenType.small;
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

export { screenType as screenType };
