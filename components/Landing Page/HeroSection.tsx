"use client";
import Typewriter from "typewriter-effect";

// import { Waitlist } from "@/components/Landing Page/Waitlist";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen p-4 bg-black text-silverGray">
      <div className="max-content text-center">
        <div className="space-y-5 mb-5 lg:mb-10">
          <span className="text-xl tracking-wide">
            Experience a new way to share your stories and ideas.
          </span>

          <div className="max-w-4xl">
            <h1 className=" leading-tight text-[4rem] max-lg:text-[2.5rem] text-white font-bold max-lg:font-medium inline-block">
              AI-Powered{" "}
              <span className="text-deepTeal inline-block">
                {" "}
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
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100, // Adjust the speed of deletion
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

        <button className="px-6 py-3 bg-gradient-to-r from-deepTeal to-skyAqua text-white rounded-lg font-medium">
          Sign Up Now
        </button>

        {/* <Waitlist /> */}
      </div>
    </section>
  );
}
