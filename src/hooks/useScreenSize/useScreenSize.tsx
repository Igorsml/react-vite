import { useState, useEffect } from "react";

export enum ScreenType {
  large = "lg",
  medium = "md",
  small = "sm",
  smallest = "xs",
}

function getScreenSize(): ScreenType {
  const mediumScreenWidth = 1920;
  const smallScreenWidth = 1280;
  const newWidth = window.innerWidth;

  if (newWidth >= mediumScreenWidth) {
    return ScreenType.large;
  } else if (newWidth < mediumScreenWidth && newWidth >= smallScreenWidth) {
    return ScreenType.medium;
  } else if (newWidth <= smallScreenWidth) {
    return ScreenType.small;
  } else {
    return ScreenType.smallest;
  }
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenType>(() => getScreenSize());
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newScreenSize = getScreenSize();
      setScreenSize(newScreenSize);
      setWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return [width, screenSize];
};
