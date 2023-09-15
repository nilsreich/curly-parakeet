import { Label } from "@/components/ui/label";
import Messages from "./messages";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex h-[100dvh]">
      <div className="w-1/2 bg-foreground"></div>
      <form
        action="/auth/sign-in"
        method="post"
        className="w-1/2 p-4 flex flex-col justify-center gap-4"
      >
        <div className="text-3xl">Login</div>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="you@example.com"
          required
          className="w-[250px]"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          required
          className="w-[250px]"
        />
        <div className="flex gap-2 mt-2">
          <Button>Sign In</Button>
          <Button formAction="/auth/sign-up" variant={"secondary"}>
            Sign Up
          </Button>
        </div>
        <Messages />
      </form>
    </div>
  );
}
