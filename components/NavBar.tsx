import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo.svg";
import NextImage from "next/image";

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="">
      <div className="px-7 py-5 flex items-center">
        <NextImage src={Logo} alt="Logo" width={40} height={40} />
        <h1 className="ml-2 text-h4 font-normal text-brown_main">Altohack</h1>

        <ul className="flex justify-center list-none ml-8">
          <li className="mr-4">
            <Link href="/dashboard" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/dashboard"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/system" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/system"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med`}
              >
                System
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/maintenance" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/maintenance"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med `}
              >
                Maintenance
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
