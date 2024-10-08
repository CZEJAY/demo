import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 text-center">
        <span className=" text-xl uppercase">Features</span>
        <h2>
          More design capabilities. <br /> Effortless ease-of-use.
        </h2>
      </div>

      <ul className=" md:flex md:justify-between max-md:grid max-md:grid-cols-2 gap-5 text-center">
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
