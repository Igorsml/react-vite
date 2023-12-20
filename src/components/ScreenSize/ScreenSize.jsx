import { useScreenSize } from "../../hooks/useScreenSize/useScreenSize";

export const ScreenSize = () => {
  const [width, screenSize] = useScreenSize();

  return (
    <div>
      <p>Current Screen Size: {width}</p>

      {/* Example of conditional rendering based on screen size */}
      {screenSize === "Large" && <p>You are viewing this on a large screen.</p>}
      {screenSize === "Medium" && (
        <p>You are viewing this on a medium screen.</p>
      )}
      {screenSize === "Small" && <p>You are viewing this on a small screen.</p>}
    </div>
  );
};
