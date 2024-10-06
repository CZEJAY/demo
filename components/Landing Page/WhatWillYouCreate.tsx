import Image from "next/image";
import { whatWillYouCreate } from "@/lib/data";

export function WhatWillYouCreate() {
  return (
    <section className="custom-container">
      <div className="max-content space-y-5 text-center text-black/50 ">
        <h2 className="text-black font-medium">
          What will you create with Patexa?
        </h2>
        <p>
          The power of visual communication is in your hands. Start your first
          project in minutes, even with no prior design experience.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {whatWillYouCreate.map((item, idx) => (
            <CardItem
              key={idx}
              title={item.label}
              content={item.content}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({
  title,
  content,
  src,
}: {
  title: string;
  content: string;
  src: string;
}) {
  return (
    <div className=" flex flex-col items-center rounded-md px-10 py-5 space-y-2  bg-gradient-to-r from-deepTeal/20 to-skyAqua/20 shadow-lg">
      <div className="bg-white rounded-full p-2">
        <Image
          src={`/assets/${src}.png`}
          width={500}
          height={500}
          alt="Presentation"
          className="size-8"
        />
      </div>
      <span className="font-medium text-xl text-deepTeal">{title}</span>
      <p>{content}</p>
    </div>
  );
}
