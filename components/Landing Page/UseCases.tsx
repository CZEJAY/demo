import { useCases } from "@/lib/data";

export function UseCases() {
  return (
    <section className="max-content grid md:grid-cols-2 md:gap-x-5 md:gap-y-10 max-md:space-y-20">
      {useCases.map((item, idx) => (
        <CardItem key={idx} title={item.title} features={item.features} />
      ))}
    </section>
  );
}

interface FeaturesType {
  emoji: string;
  text: string;
}

export function CardItem({
  title,
  features,
}: {
  title: string;
  features: FeaturesType[];
}) {
  return (
    <div className="space-y-4">
      <h2 className="md:min-h-[9rem]">{title}</h2>
      <ul className="space-y-1 md:min-h-[9rem]">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <span className="p-1 shadow-xl rounded-full">{feature.emoji}</span>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
