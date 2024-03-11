import { useScreenSize } from "../../hooks/useScreenSize/useScreenSize";
import { ScreenType } from "../../hooks/useScreenSize/useScreenSize";

export const ScreenSize = () => {
  const [width, previousWidth, screenSize] = useScreenSize();

  return (
    <div>
      <p>Current Screen Size: {width}</p>
      <p>PrevWidth: {previousWidth}</p>
      {screenSize === ScreenType.large && <p>You are viewing this on a large screen.</p>}
      {screenSize === ScreenType.medium && <p>You are viewing this on a medium screen.</p>}
      {screenSize === ScreenType.small && <p>You are viewing this on a small screen.</p>}
    </div>
  );
};
