import { useDj } from "@/store/dj-store";
import { Logo, Wordmark } from "./logo";
import { LegalFooter } from "./legal-footer";

export function BootScreen({ onEnter }: { onEnter: () => void }) {
  const copy = useDj((s) => s.copy);
  const lang = useDj((s) => s.lang);
  const setLang = useDj((s) => s.setLang);
  const progress = useDj((s) => s.progress);
  const progressLabel = useDj((s) => s.progressLabel);
  const booting = progress > 0 && progress < 1;

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Logo className="mb-6 size-28 sm:size-36" />
        <h1 className="text-4xl sm:text-6xl">
          <Wordmark />
        </h1>
        <p className="mt-3 whitespace-pre-line text-sm tracking-wide text-muted">{copy.tagline}</p>
        <div className="mt-8 flex overflow-hidden rounded-sm border border-border">
          <button
            type="button"
            onClick={() => setLang("uk")}
            className={`h-8 px-3 text-xs ${lang === "uk" ? "bg-accent text-accent-fg" : "text-muted"}`}
          >
            Українська
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`h-8 px-3 text-xs ${lang === "en" ? "bg-accent text-accent-fg" : "text-muted"}`}
          >
            English
          </button>
        </div>
        <button
          type="button"
          onClick={onEnter}
          disabled={booting}
          className="mt-10 h-11 min-w-48 rounded-sm bg-accent px-6 text-sm font-medium uppercase tracking-[0.18em] text-accent-fg disabled:opacity-60"
        >
          {booting ? copy.generating : copy.enter}
        </button>
        {booting ? (
          <div className="mt-6 w-full max-w-xs">
            <div className="h-1 overflow-hidden rounded-sm bg-surface-3">
              <div className="h-full bg-accent" style={{ width: `${Math.round(progress * 100)}%` }} />
            </div>
            <p className="mt-2 font-mono text-[11px] text-muted">{progressLabel}</p>
          </div>
        ) : (
          <>
            <p className="mt-4 text-[11px] text-faint">{copy.clickToStart}</p>
            <a
              href="https://send.monobank.ua/jar/Fi1zMNRaW"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-[11px] text-faint transition-colors hover:text-muted"
            >
              {copy.donateHint}
            </a>
          </>
        )}
      </div>
      <LegalFooter />
    </div>
  );
}
