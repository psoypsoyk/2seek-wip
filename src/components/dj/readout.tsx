import { useEffect, useState } from "react";
import { getEngine, type DeckId } from "@/lib/audio/engine";
import { formatTime } from "@/lib/utils";

export function TimeReadout({ id, duration }: { id: DeckId; duration: number }) {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      try {
        setPos(getEngine().decks[id].position());
      } catch {
        /* engine not ready */
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [id]);
  return (
    <div>
      {formatTime(pos)} / {formatTime(duration)}
    </div>
  );
}
