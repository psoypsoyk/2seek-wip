import { createFileRoute } from "@tanstack/react-router";
import { SessionApp } from "@/components/dj/session-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SessionApp />;
}
