import Image from "next/image";
import { PrismaClient } from "../../generated/prisma";
import Link from "next/link";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D";

export default async function Home() {
  const prisma = new PrismaClient();

  const profile = await prisma.profile.findUnique({
    where: {
      id: 1,
    },
  });

  const doesProfileExist = profile !== null;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] w-4xl row-start-2 items-center sm:items-start">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold">Welcome to your profile page!</h1>
          {doesProfileExist ? (
            <Link
              className="hover:bg-blue-600 transition-colors duration-300 bg-blue-500 text-white p-2 rounded-md"
              href="/edit"
            >
              Edit Profile
            </Link>
          ) : (
            <Link
              className="hover:bg-blue-600 transition-colors duration-300 bg-blue-500 text-white p-2 rounded-md"
              href="/create"
            >
              Create Profile
            </Link>
          )}
        </div>
        {doesProfileExist && (
          <section className="w-full flex gap-2 border-2 border-gray-300 rounded-md p-4">
            <div className="flex flex-col gap-2 w-1/4">
              <Image
                className="rounded-full w-40 h-40 object-cover self-center"
                src={profile?.image || DEFAULT_IMAGE}
                alt={profile?.name}
                width={200}
                height={200}
              />
              <h1 className="text-2xl font-bold self-center">
                {profile?.name}
              </h1>
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <div className="flex gap-2 w-3/4 text-lg">
                <p>{profile?.headline || "No headline"}</p>
                <span className="text-gray-500">•</span>
                <p>{profile?.location || "No location"}</p>
              </div>
              <p>{profile?.aboutMe || "Edit your profile to add a bio"}</p>
            </div>
          </section>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
