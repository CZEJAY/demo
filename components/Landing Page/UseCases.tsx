import { useCases } from "@/lib/data";

export function UseCases() {
  return (
    <section className="max-content grid md:grid-cols-2 md:gap-x-5 md:gap-y-10 max-md:space-y-20">
      {useCases.map((item, idx) => (
        <CardItem
          key={idx}
          title={item.title}
          description={item.description}
          features={item.features}
        />
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
  description,
  features,
}: {
  title: string;
  description: string;
  features: FeaturesType[];
}) {
  return (
    <div className="space-y-4">
      <span className="text-black/50 text-xl">
        Get help whenever you need it
      </span>
      <h2>{title}</h2>
      <p className="text-black/50">{description}</p>
      <ul className="space-y-1">
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
