import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="grow border-x border-[var(--foreground-rgb)]"></div>
      <div className="flex basis-96 flex-col items-center justify-center border-x border-[var(--foreground-rgb)]">
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
              className="relative size-6"
              src="/github.svg"
              alt="github logo"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/matthewiiv/" target="_blank">
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
      <div className="grow border-x border-[var(--foreground-rgb)]"></div>
    </main>
  );
}
