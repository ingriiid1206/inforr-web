import buntingImg from "@/assets/bunting.png";

export function BuntingBanner() {
  return (
    <div
      className="w-full overflow-hidden bg-repeat-x"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${buntingImg})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        imageRendering: "pixelated",
        height: "clamp(160px, 26vw, 240px)",
      }}
    />
  );
}