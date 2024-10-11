import Image from "next/image";
import { teamWork } from "@/lib/data";

export function Teamwork() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 text-center">
        <span className=" text-xl uppercase">teamwork</span>
        <h2>Team Collaboration with Patexa </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 md:gap-y-5 max-md:space-y-5">
        {teamWork.map((item, idx) => (
          <CardItem
            key={idx}
            title={item.label}
            content={item.content}
            src={item.src}
          />
        ))}
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
    <div className="bg-silverGray/20 shadow-lg p-5 rounded-md space-y-5 flex flex-col items-center">
      <Image
        src={`/assets/${src}.webp`}
        width={500}
        height={500}
        className="rounded-md"
        alt={src}
      />

      <div className="text-center text-pretty">
        <span className="text-xl font-medium">{title}</span>
        <p className="text-black/50">{content}</p>
      </div>
    </div>
  );
}
