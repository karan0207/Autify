
"use client";

import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import SubscriptionCard from "@/components/global/subscription-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  return (
    <main className="flex items-center justify-center flex-col overflow-hidden">
      <Navbar />
      <section className="min-h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased overflow-visible">
        <div className="absolute inset-0 h-full w-full flex items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>

        {/* Container Scroll Section */}
        <div className="flex flex-col mt-[-100px] md:mt-[-50px] w-full">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col text-center mt-20 md:mt-0">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 text-2xl w-fit sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          >
            {/* Responsive Image */}
            {isMobile ? (
              <Image
                src="/main.jpeg"
                fill
                alt="bannerImage"
                className="object-cover border-8 rounded-2xl overflow-hidden"
              />
            ) : (
              <Image
                src="/wiremap.jpeg"
                width={1000}
                height={1000}
                alt="bannerImage"
                className="object-cover border-8 rounded-2xl overflow-hidden"
              />
            )}
          </ContainerScroll>
        </div>

        {/* Infinite Moving Cards for Mobile */}
        {/* <div className="w-full border border-white z-50 flex flex-col justify-center items-center h-full">
          {isMobile ? (
            <InfiniteMovingCards
              className="md:mt-[18rem] mt-[-100px] w-full"
              items={clients}
              direction="right"
              speed="slow"
            />
          ) : (
            <InfiniteMovingCards
              className="md:mt-[18rem] mt-[-100px] w-full"
              items={clients}
              direction="right"
              speed="slow"
            />
          )}
        </div> */}
      </section>

      {/* Infinite Moving Cards for Desktop */}

      {/* Hero Parallax Section */}
      <section className="w-full">
        <HeroParallax products={products} />
      </section>

      {/* Lamp and Subscription Section */}
      <section className="mt-[-500px] px-4 py-12 w-full flex flex-col items-center">
        <LampComponent />
        <SubscriptionCard />
      </section>
    </main>
  );
}
