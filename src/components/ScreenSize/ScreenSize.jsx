import { useScreenSize } from "../../hooks/useScreenSize/useScreenSize";
import { screenType } from "../../hooks/useScreenSize/useScreenSize";

export const ScreenSize = () => {
  const [width, screenSize] = useScreenSize();

  return (
    <div>
      <p>Current Screen Size: {width}</p>

      {screenSize === screenType.large && (
        <p>You are viewing this on a large screen.</p>
      )}
      {screenSize === screenType.medium && (
        <p>You are viewing this on a medium screen.</p>
      )}
      {screenSize === screenType.small && (
        <p>You are viewing this on a small screen.</p>
      )}
    </div>
  );
};
