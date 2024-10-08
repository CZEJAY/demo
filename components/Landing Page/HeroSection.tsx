"use client";
import Typewriter from "typewriter-effect";
import { Waitlist } from "@/components/Landing Page/Waitlist";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen 2xl:h-[50rem] p-4 bg-white">
      <div className="max-content text-center">
        <div className="space-y-5 mb-5 lg:mb-10">
          <span className="text-xl tracking-wide">
            Experience a new way to share your stories and ideas.
          </span>

          <div className="max-w-4xl">
            <h1 className="inline-block">
              AI-Powered{" "}
              <span className="inline-block bg-gradient-to-r from-deepTeal to-skyAqua bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: [
                      "Content",
                      "Presentations",
                      "Pitch Decks",
                      "Resumes",
                      "Websites",
                      "Documents",
                    ],
                    delay: 150,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 150,
                  }}
                />
              </span>
              Creation Platform
            </h1>
          </div>
        </div>

        <p className=" md:max-w-2xl text-pretty mx-auto mb-12 hidden">
          {/* Create beautiful presentations, pitch decks, resumes, websites, and
        documents. <br /> No design, writing, or coding skills needed.{" "}
        <br />
        Bring your ideas to life like never before. */}
          Beautiful presentations, documents, and websites. No design or coding
          skills required. <br /> Bring your ideas to life effortlessly.
        </p>

        <Waitlist />
      </div>
    </section>
  );
}
