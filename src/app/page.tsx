'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4 bg-black text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full py-24">
        {/* Left: Text */}
        <div className="space-y-6 px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold">
            SIM IT Club
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            Empowering students through technology, innovation, and community.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link href="/join-us">
              <Button className="px-6 py-3 text-base">
                Join Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/initiatives">
              <Button
                variant="outline"
                className="px-6 py-3 text-base border-white text-white hover:bg-white hover:text-black transition"
              >
                Explore Our Events
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/omnitool-img.jpeg"
            alt="SIM IT Club Members"
            width={480}
            height={360}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
