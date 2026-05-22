import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  alt?: string;
  caption?: string;
}

export function BeforeAfter({ before, after, alt = "Before and after garden transformation", caption }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => { if (dragging.current) update(e.clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [update]);

  return (
    <figure className="group">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-elegant select-none touch-none bg-muted"
        onPointerDown={(e) => { dragging.current = true; update(e.clientX); }}
      >
        <img src={after} alt={`After — ${alt}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`Before — ${alt}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ width: ref.current?.clientWidth || "100%", maxWidth: "none" }} />
        </div>

        <span className="absolute top-3 left-3 rounded-full bg-black/65 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Before</span>
        <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">After</span>

        <div className="absolute inset-y-0 w-0.5 bg-white pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center h-10 w-10 rounded-full bg-white shadow-elegant ring-4 ring-primary/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4 1 8l3 4"/><path d="M12 4l3 4-3 4"/></svg>
          </div>
        </div>
      </div>
      {caption && <figcaption className="mt-4 text-sm text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  );
}
