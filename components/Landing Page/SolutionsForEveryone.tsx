import Image from "next/image";

export default function SolutionsForEveryone() {
  return (
    <section className="max-content space-y-5">
      <div className="space-y-4 text-center">
        <span className=" text-xl uppercase">solutions for everyone</span>
        <h2>What can Patexa do for you?</h2>
      </div>

      <div>
        <div className="max-md:grid max-md:grid-cols-3 md:flex items-center space-x-5 ring-1 ring-silverGray/50 rounded-md p-5">
          <Image
            src="/assets/business.webp"
            width={150}
            height={200}
            alt="Business"
            className="rounded-md"
          />

          <div className="flex flex-col max-md:col-span-2">
            <span className="font-medium text-xl">Business Owner</span>
            <p className="text-black/50">
              Create professional branded content in 70% less time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
