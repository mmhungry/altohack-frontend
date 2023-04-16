import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo.svg";
import Wrench from "@/assets/icons/wrench.svg";
import Meter from "@/assets/icons/meter.svg";
import Constructor from "@/assets/icons/constructor.svg";
import NextImage from "next/image";

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="">
      <div className="px-7 py-5 flex items-center">
        <NextImage src={Logo} alt="Logo" width={40} height={40} />
        <h1 className="ml-2 text-h4 font-normal text-brown_main">Altohack</h1>

        <ul className="flex justify-center list-none ml-8">
          <li className="mr-6">
            <Link href="/dashboard" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/dashboard"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med flex align-middle justify-items-center`}
              >
                <span className="mr-2 flex align-middle justify-items-center">
                  <NextImage src={Meter} alt="Meter" width={20} height={20} />
                </span>
                Dashboard
              </span>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/system" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/system"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med flex align-middle justify-center`}
              >
                <span className="mr-2 flex align-middle justify-items-center">
                  <NextImage src={Wrench} alt="Wrench" width={20} height={20} />
                </span>
                System
              </span>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/maintenance" legacyBehavior>
              <span
                className={`${
                  router.pathname === "/maintenance"
                    ? "text-sub1 text-primary"
                    : "text-brown_main text-b1"
                } cursor-pointer hover:text-brown_med flex align-middle justify-center `}
              >
                <span className="mr-2 flex align-middle justify-items-center">
                  <NextImage
                    src={Constructor}
                    alt="Constructor"
                    width={20}
                    height={20}
                  />
                </span>
                Maintenance
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
