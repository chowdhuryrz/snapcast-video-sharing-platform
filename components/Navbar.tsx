"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {};

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <nav className="">
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="Logo"
            width={32}
            height={32}
          />
          SnapCast
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/123456")}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
