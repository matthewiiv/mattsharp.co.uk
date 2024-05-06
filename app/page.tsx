import Image from "next/image";
import Link from "next/link";

import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="hidden basis-1/3 border-x border-[var(--foreground-rgb)] lg:block" />
        <div className="flex grow basis-1/3 flex-col items-center justify-center border-x border-[var(--foreground-rgb)] lg:grow-0">
          <h1 className="text-4xl">Matt Sharp</h1>
          <p className="mt-2 text-lg">Software engineering manager</p>
          <p className="mt-2 max-w-60 text-center">
            Currently at{" "}
            <Link
              className="text-[var(--primary)] underline"
              href="https://www.letsdothis.com/gb"
              target="_blank"
            >
              Let&apos;s Do This
            </Link>
          </p>
          <div className="mt-2 flex items-center gap-3">
            <Link href="https://github.com/matthewiiv" target="_blank">
              <Image
                className="relative size-6 dark:invert"
                src="/github.svg"
                alt="github logo"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matthewiiv/"
              target="_blank"
            >
              <Image
                className="relative w-6"
                src="/linkedin.png"
                alt="linkedin logo"
                width={63}
                height={54}
              />
            </Link>
          </div>
        </div>
        <div className="grow basis-1/3 border-x border-[var(--foreground-rgb)] p-8">
          <h2 className="text-2xl">Projects</h2>
          <ul className="mt-4">
            <Project
              name="transcribemynotes.com"
              logo="/tmn-logo.png"
              description="WhatsApp note transcription using Whisper."
              link="https://transcribemynotes.com"
            />
            <Project
              name="morpheu5.com"
              logo="/morpheu5.png"
              description="Generative art. >1k sales."
              link="https://www.morpheu5.com/"
            />
            <Project
              name="supermagiclink.com (shut down)"
              logo="/sml-png.png"
              description="Live video synchronisation for Twitch. 30,000 users in 3 days. 100,000 in 6 months."
              // link="https://www.morpheu5.com/"
            />
            {/*
            <li className="mt-2">
              <Link
                className="hover:text-[var(--primary)]"
                href="https://www.morpheu5.com/"
                target="_blank"
              >
                <Image
                  className="relative mr-2 inline size-8 dark:invert"
                  src="/sml-png.png"
                  alt="transcribe my notes logo"
                  width={40}
                  height={40}
                />
                supermagiclink.com (shut down)
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="hover:text-[var(--primary)]"
                href="https://www.morpheu5.com/"
                target="_blank"
              >
                <Image
                  className="relative mr-2 inline size-8 dark:invert"
                  src="/tmn-logo.png"
                  alt="transcribe my notes logo"
                  width={40}
                  height={40}
                />
                bjjmobility.com (shut down)
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="hover:text-[var(--primary)]"
                href="https://www.morpheu5.com/"
                target="_blank"
              >
                <Image
                  className="relative mr-2 inline size-8 dark:invert"
                  src="/tmn-logo.png"
                  alt="transcribe my notes logo"
                  width={40}
                  height={40}
                />
                toshka.co.uk (shut down)
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </main>
  );
}
