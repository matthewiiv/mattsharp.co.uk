import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type Project = {
  logo: string;
  name: string;
};

export default function Project({
  name,
  logo,
  description,
  link,
}: {
  name: string;
  logo: string;
  description: string;
  link?: string;
}) {
  return (
    <li className="mt-4">
      <div className="flex items-center gap-2">
        <Image
          className="relative inline size-8 dark:invert"
          src={logo}
          alt="logo"
          width={40}
          height={40}
        />
        <p>{name}</p>
        {link ? (
          <Link
            className="hover:text-[var(--primary)]"
            href={link}
            target="_blank"
          >
            <ArrowTopRightOnSquareIcon className="mb-[2px] size-5" />
          </Link>
        ) : null}
      </div>
      <p className="text-sm">{description}</p>
    </li>
  );
}
