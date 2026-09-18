import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      draggable={false}
      className={cn("select-none object-contain", className)}
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold leading-none tracking-[0.14em] text-fg",
        className,
      )}
    >
      <span className="inline-block text-[1.22em] leading-none text-accent lining-nums">2</span>
      <span className="leading-none">SEEK</span>
    </span>
  );
}
