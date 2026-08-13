import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nazaj na vrh"
      className={`fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary-bright ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={17} />
    </button>
  );
}

export default BackToTop;
