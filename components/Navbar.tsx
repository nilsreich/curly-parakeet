import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export const dynamic = "force-dynamic";
export const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <nav className=" flex border-b px-2 py-1 items-center">
      {user ? (
        <div className=" flex items-center grow">
          Hey, {user.email}!
          <form action="/auth/sign-out" method="post">
            <Button variant={"ghost"} size={"icon"}>
              <LogOutIcon strokeWidth={1} />
            </Button>
          </form>
        </div>
      ) : (
        <Link href="/login" className="">
          Login
        </Link>
      )}
      <ModeToggle />
    </nav>
  );
};
