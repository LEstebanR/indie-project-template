import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "@views/auth/signup";

export const Route = createFileRoute("/signup")({
  component: SignUp,
});
