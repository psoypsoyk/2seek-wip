import { useEffect, useRef } from "react";
import { getEngine, hasEngine } from "@/lib/audio/engine";
import { cn } from "@/lib/utils";

export function BeatCounter() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const root = wrap.current;
      if (root) {
        const clocks = [
          { armed: false, playing: false, barBeat: 0, phase: 0 },
          { armed: false, playing: false, barBeat: 0, phase: 0 },
        ];
        try {
          if (hasEngine()) {
            const e = getEngine();
            clocks[0] = e.decks.A.beatClock();
            clocks[1] = e.decks.B.beatClock();
          }
        } catch {
          /* engine gone */
        }
        const pips = root.querySelectorAll<HTMLElement>("[data-pip]");
        pips.forEach((el, i) => {
          const row = i < 4 ? 0 : 1;
          const col = i & 3;
          const c = clocks[row];
          if (!c.armed) {
            el.style.opacity = "0.14";
            return;
          }
          const attack = c.playing ? Math.pow(1 - c.phase, 2.2) : 0.55;
          if (col === c.barBeat) {
            const peak = col === 0 ? 1 : 0.82;
            const floor = col === 0 ? 0.5 : 0.4;
            el.style.opacity = String(floor + (peak - floor) * attack);
          } else {
            el.style.opacity = col === 0 ? "0.28" : "0.14";
          }
        });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrap} role="meter" aria-label="Beat A / B" className="flex w-full flex-col gap-px">
      {(["a", "b"] as const).map((row) => (
        <div key={row} className="flex gap-px">
          {[0, 1, 2, 3].map((col) => (
            <span
              key={col}
              data-pip
              className={cn(
                "h-1.5 min-w-0 flex-1 rounded-[1px] shadow-[inset_0_-3px_0_rgba(0,0,0,0.35)]",
                row === "a" ? "bg-deck-a" : "bg-deck-b",
              )}
              style={{ opacity: 0.14 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
