import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 text-center">
        <span className=" text-xl uppercase">Features</span>
        <h2>
          Transform Your Content with Our Powerful Features
        </h2>
      </div>

      <ul className="grid md:grid-cols-2 gap-5 text-center">
        {features.map((item, idx) => (
          <li
            key={idx}
            className="bg-deepTeal/20 px-4 py-2 rounded-md text-deepTeal shadow-md"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
