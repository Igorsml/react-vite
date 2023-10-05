import { useToggle } from "../../hooks/useToggle/useToggle";
import Mer from "./Mer.jpg";

export const ShowHide = () => {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div style={{ position: "relative" }}>
      <button style={{ minWidth: "100px" }} onClick={toggleVisible}>
        {isVisible ? "Show" : "Hide"}
      </button>
      <div>
        {isVisible && (
          <img
            style={{
              width: "330px",
              position: "absolute",
              left: "0px",
              top: "100px",
              borderRadius: "5px",
              zIndex: "1",
            }}
            src={Mer}
            title="Unmercurrry"
          />
        )}
      </div>
    </div>
  );
};
