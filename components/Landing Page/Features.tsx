import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="custom-container">
      <div className="max-content space-y-5">
        <div className="space-y-4 text-center">
          <span className=" text-xl uppercase">Features</span>
          <h2>
            More design capabilities. <br /> Effortless ease-of-use.
          </h2>
        </div>

        <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-center">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="bg-deepTeal/20 px-4 py-2 rounded-md text-deepTeal shadow-md"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
