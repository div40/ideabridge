import Link from "next/link";
import { auth, signIn, signOut } from "../../auth";
import { Github } from "lucide-react";
import Image from "next/image";

export default async function Navbar() {
  // check if user is logged in or not (session)
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white-100 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <p className="text-slate-900">Logo</p>
        </Link>
        <div className="flex items-center gap-5 text-black px-2 py-1">
          {session && session?.user ? (
            <>
              <Link href="/idea/create">
                <span className="font-medium text-lg">Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button type="submit" className="font-medium text-lg">
                  Logout
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span className="font-medium text-lg">
                  {session?.user?.name}
                </span>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2 lg:gap-4 border-2 border-black rounded-xl px-2 py-1">
              <span className="font-medium text-lg">Login with</span>
              <form action="" className="flex items-center">
                <button type="submit" className="hover:scale-105 transition">
                  <Image
                    src={"/assets/google-icon-logo.svg"}
                    alt="google logo"
                    height={30}
                    width={30}
                    className="-mt-1"
                  />
                </button>
              </form>
              <span className="font-medium">or</span>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="hover:scale-105 transition">
                  <Image
                    src={"/assets/github-icon.svg"}
                    alt="github-icon"
                    height={30}
                    width={30}
                  />
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
