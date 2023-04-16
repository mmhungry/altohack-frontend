import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <NavBar />
      </div>
    </>
  );
}
