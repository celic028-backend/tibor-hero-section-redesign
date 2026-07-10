/**
 * The Figma button outline: an outside gradient border (2px L/R, 1px T/B) that
 * is white at the ends and fades into #6B56FF in the middle. Drop inside any
 * `position: relative`, `#6B56FF`, `border-radius: 100px` button.
 */
export default function FigmaBorderSpan() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        inset: "-1px -2px",
        borderRadius: "100px",
        padding: "1px 2px",
        background:
          "linear-gradient(to right, #FFFFFF 0%, #6B56FF 50%, #FFFFFF 100%)",
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}
