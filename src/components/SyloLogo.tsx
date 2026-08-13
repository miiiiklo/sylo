import logo from "@/assets/sylo-logo.png";

/**
 * Centralna logo komponenta. Za zamenjavo logotipa zamenjaj samo
 * datoteko src/assets/sylo-logo.png.
 */
export function SyloLogo({
  className = "h-9 w-9",
  glow = false,
}: {
  className?: string;
  glow?: boolean;
}) {
  return (
    <img
      src={logo}
      alt="SYLO logotip"
      width={512}
      height={512}
      className={`${className} rounded-full object-contain ${
        glow ? "[filter:drop-shadow(0_0_28px_rgba(139,61,255,0.55))]" : ""
      }`}
    />
  );
}

export default SyloLogo;
