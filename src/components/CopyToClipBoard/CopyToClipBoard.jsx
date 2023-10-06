import { useCopyToClipboard } from "../../hooks/useCopyToClipboard/useCopyToClipboard";

export const CopyToClipBoard = () => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  return (
    <div>
      <h3>Copy to clipboard</h3>
      <div
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: "18px",
        }}
        onClick={() => copyToClipboard("Aboba")}
      >
        Aboba
      </div>
      {success ? `Copied!` : ""}
    </div>
  );
};
