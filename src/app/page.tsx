"use client"
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/account/register");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <main>
      <section className="px-4 py-6 space-y-4 bg-accent400 w-full h-screen">
        <div className="flex justify-center items-center h-full ">
          <Image src={logo} alt="Logo" />
        </div>
      </section>
    </main>
  );
}
