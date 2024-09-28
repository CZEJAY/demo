import { Waitlist } from "@/components/Home/Waitlist";

export default function Home() {
  return (
    <main>
      <section className="max-content flex items-center justify-center h-screen p-4">
        <div className="text-center">
          <div className="space-y-2  mb-4">
            <h1 className="bg-gradient-to-r from-deepTeal to-skyAqua bg-clip-text text-transparent md:max-w-4xl">
              Experience a new way to share your stories and ideas.
            </h1>

            <h3 className="text-2xl md:text-4xl font-bold font-lora">
              AI-Powered Content Creation Platform
            </h3>
          </div>

          <p className=" md:max-w-2xl text-pretty mx-auto mb-12">
            Create beautiful presentations, pitch decks, resumes, websites, and
            documents. <br /> No design, writing, or coding skills needed.{" "}
            <br />
            Bring your ideas to life like never before.
          </p>

          <Waitlist />
        </div>
      </section>
    </main>
  );
}
