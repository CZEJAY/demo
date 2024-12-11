"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import React from "react";

const EmptyState = () => {
  return (
    <section className=" text-gray-900 px-6 md:px-12 py-10 md:py-20 flex flex-col md:flex-row items-start justify-center text-left">
      {/* Beta Tag */}
      <div className="flex-col flex w-full items-start max-w-lg">
        <Badge variant={"beta"}>BETA</Badge>

        {/* Title */}
        <h1 className="text-lg md:text-3xl mt-6 font-bold mb-4 leading-tight">
          Websites that don't stress you out, in seconds
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-8">
          It's a little quiet in here. Use Patexa to draft, craft, and publish
          your first website in minutes.
        </p>

        {/* Buttons */}
        <div className="flex  md:flex-row gap-4 text-nowrap">
          <a
            href="/create/generate"
            className="gradient-bg text-white text-base font-medium px-6 py-3 rounded-lg shadow-md hover:bg-primary/80 transition"
          >
            Create site
          </a>
          <a
            href="#"
            className="bg-white text-gray-700 border border-gray-300 text-base font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            Learn more
            <ExternalLink className="" />
          </a>
        </div>
      </div>

      {/* Illustration */}
      <div className="mt-10">
        <img
          src="/assets/astronaut-chill-cloud.svg"
          alt="Astronaut resting on a cloud"
          className="w-48 h-auto"
        />
      </div>
    </section>
  );
};

export default EmptyState;
