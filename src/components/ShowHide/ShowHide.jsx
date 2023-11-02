import { useToggle } from "../../hooks/useToggle/useToggle";
import Mer from "./Mer.jpg";

export const ShowHide = () => {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div style={{ position: "relative" }}>
      <h3>useToggle</h3>
      <button style={{ minWidth: "100px" }} onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <div>
        {isVisible && (
          <img
            style={{
              width: "330px",
              position: "absolute",
              left: "0px",
              top: "120px",
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
