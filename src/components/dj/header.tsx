import { Circle, HelpCircle } from "lucide-react";
import { useDj } from "@/store/dj-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo, Wordmark } from "./logo";

export function Header() {
  const copy = useDj((s) => s.copy);
  const lang = useDj((s) => s.lang);
  const setLang = useDj((s) => s.setLang);
  const rec = useDj((s) => s.recording);
  const recToggle = useDj((s) => s.recToggle);
  const master = useDj((s) => s.master);
  const setMaster = useDj((s) => s.setMaster);
  const setHelp = useDj((s) => s.setHelp);

  return (
    <header className="flex h-12 shrink-0 items-center gap-3 border-b border-border bg-surface px-3">
      <div className="flex items-center gap-2">
        <Logo className="size-8" />
        <Wordmark className="text-sm" />
      </div>
      <div className="hidden whitespace-pre-line text-[11px] leading-tight text-muted sm:block">{copy.tagline}</div>
      <div className="ml-auto flex items-center gap-2">
        <label className="hidden items-center gap-2 text-[10px] uppercase tracking-widest text-muted sm:flex">
          {copy.master}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={master}
            onChange={(e) => setMaster(Number(e.target.value))}
            className="w-24"
          />
        </label>
        <Button
          variant={rec ? "rec" : "outline"}
          size="sm"
          onClick={() => void recToggle()}
          className={cn(rec && "animate-pulse")}
        >
          <Circle className={cn("size-2.5 fill-current", rec ? "text-fg" : "text-rec")} />
          {rec ? copy.stopRec : copy.rec}
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setHelp(true)} aria-label={copy.help}>
          <HelpCircle />
        </Button>
        <div className="flex overflow-hidden rounded-sm border border-border">
          <button
            type="button"
            onClick={() => setLang("uk")}
            className={cn(
              "h-7 px-2 text-[10px] font-medium tracking-wider",
              lang === "uk" ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
            )}
          >
            UA
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={cn(
              "h-7 px-2 text-[10px] font-medium tracking-wider",
              lang === "en" ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
            )}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
