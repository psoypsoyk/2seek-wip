import { useDj } from "@/store/dj-store";
import { Button } from "@/components/ui/button";

const KEYS = [
  { k: "Space", uk: "Play / Pause активної деки", en: "Play / Pause focused deck" },
  { k: "Z / X", uk: "Play A / Play B", en: "Play A / Play B" },
  { k: "C / V", uk: "CUE A / CUE B", en: "CUE A / CUE B" },
  { k: "S / D", uk: "SYNC A / SYNC B (до MASTER)", en: "SYNC A / SYNC B (to MASTER)" },
  { k: "Q W E R", uk: "Hot cues деки A", en: "Deck A hot cues" },
  { k: "U I O P", uk: "Hot cues деки B", en: "Deck B hot cues" },
  { k: "1–8", uk: "Семплер", en: "Sampler pads" },
  { k: "A / F", uk: "Кросфейдер ліво / право", en: "Crossfader left / right" },
  { k: "G", uk: "Кросфейдер центр", en: "Crossfader center" },
  { k: "Shift+R", uk: "Запис міксу", en: "Record mix" },
  { k: "?", uk: "Ця довідка", en: "This help" },
];

export function HelpDialog() {
  const open = useDj((s) => s.helpOpen);
  const setHelp = useDj((s) => s.setHelp);
  const lang = useDj((s) => s.lang);
  const copy = useDj((s) => s.copy);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4"
      onClick={() => setHelp(false)}
    >
      <div
        className="w-full max-w-md rounded-md border border-border bg-surface p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-sm font-semibold tracking-wide text-fg">{copy.helpTitle}</h2>
        <ul className="mt-3 space-y-1.5 text-sm">
          {KEYS.map((row) => (
            <li key={row.k} className="flex justify-between gap-3">
              <span className="font-mono text-[12px] text-accent">{row.k}</span>
              <span className="text-muted">{lang === "uk" ? row.uk : row.en}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 text-[12px] text-muted">
          <p className="font-medium text-fg">{copy.tipsTitle}</p>
          <p>{copy.tip1}</p>
          <p>{copy.tip2}</p>
          <p>{copy.tip3}</p>
        </div>
        <Button className="mt-4" variant="outline" onClick={() => setHelp(false)}>
          {copy.helpClose}
        </Button>
      </div>
    </div>
  );
}
