import Image from "next/image";
import { teamWork } from "@/lib/data";

export function Teamwork() {
  return (
    <section className="custom-container">
      <div className="max-content space-y-5">
        <div className="space-y-4 text-center">
          <span className=" text-xl uppercase">teamwork</span>
          <h2>For you & your team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamWork.map((item, idx) => (
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
    <div className="bg-silverGray/20 shadow-lg p-5 rounded-xl space-y-5 flex flex-col items-center">
      <Image
        src={`/assets/${src}.webp`}
        width={500}
        height={500}
        className="rounded-xl"
      />

      <div className="text-center">
        <span className="text-xl font-medium">{title}</span>
        <p className="text-black/50">{content}</p>
      </div>
    </div>
  );
}
