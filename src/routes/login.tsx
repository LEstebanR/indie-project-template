import { createFileRoute } from "@tanstack/react-router";
import { LogIn } from "@views/auth/login";

export const Route = createFileRoute("/login")({
  component: LogIn,
});
