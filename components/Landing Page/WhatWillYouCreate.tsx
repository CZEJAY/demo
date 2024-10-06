import Image from "next/image";

export function WhatWillYouCreate() {
  return (
    <section className="max-lg:px-4 lg:px-14 xl:px-28">
      <div className="max-content space-y-5 text-center text-black/50 ">
        <h2 className="text-black font-medium">
          What will you create with Patexa?
        </h2>
        <p>
          The power of visual communication is in your hands. Start your first
          project in minutes, even with no prior design experience.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <CardItem
            title="Presentations"
            content="Create engaging, interactive pitch decks."
            src="presentation"
          />
          <CardItem
            title="Documents"
            content="Design professional reports, proposals, and white papers."
            src="document"
          />
          <CardItem
            title="Data Visualization"
            content="Bring your data to life with interactive charts and graphs."
            src="visualization"
          />
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
