import { solutions } from "@/lib/data";
import Image from "next/image";

export default function SolutionsForEveryone() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 flex  flex-col items-center">
        <span className=" text-xl uppercase text-center">
          Perfect for Every Industry and Professional
        </span>
        <h2>What can Patexa do for you?</h2>

        <p className="text-black/50 max-w-2xl text-center">
          No matter your role or design and copywriting skills, Patexa
          simplifies your tasks with our comprehensive solution, helping you
          save up to 65% of your time.
        </p>
      </div>

      <div className="space-y-5">
        {solutions.map((item, idx) => (
          <CardItem
            key={idx}
            imageSrc={item.imageSrc}
            altText={item.altText}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function CardItem({
  imageSrc,
  altText,
  title,
  description,
}: {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-md:grid max-md:grid-cols-3 md:flex items-center space-x-5 ring-1 ring-silverGray/50 rounded-md p-5">
      <Image
        src={`/assets/${imageSrc}.webp`}
        width={150}
        height={200}
        alt={altText}
        className="rounded-md"
      />

      <div className="flex flex-col max-md:col-span-2">
        <span className="font-medium text-xl">{title}</span>
        <p className="text-black/50">{description}</p>
      </div>
    </div>
  );
}
