
"use client";

import Image from "next/image";

const previews = [
  {
    title: "AI Chat Interface",
    description:
      "Have natural conversations with EchoGPT through a clean and intuitive chat experience.",
    image: "/screenshots/mobile.png",
    large: true,
  },
  {
    title: "Smart Conversations",
    description:
      "Get fast and helpful AI responses for your everyday questions.",
    image: "/img/Screenshot 2026-09-26 115227.png",
  },
  {
    title: "Mobile Experience",
    description:
      "Enjoy the same smooth AI experience on your mobile devices.",
    image:"/img/Screenshot 2026-09-26 115314.png" ,
  },
];

export default function ProductPreview() {
  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-semibold text-gray-700">
            Product Preview
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            See EchoGPT{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              in action
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore the clean interface and powerful AI experience that makes
            EchoGPT simple, fast, and easy to use.
          </p>
        </div>

        {/* Main Preview */}
        <div className="group relative mb-6 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-3 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/70 sm:p-5">
          {/* Browser Header */}
          <div className="mb-3 flex items-center gap-2 rounded-xl bg-white px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <div className="ml-3 flex-1 rounded-lg bg-gray-100 px-4 py-2 text-xs text-gray-400">
              echogpt.ai
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src={previews[0].image}
              alt={previews[0].title}
              fill
              priority
              className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Preview Info */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold text-black">
              {previews[0].title}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              {previews[0].description}
            </p>
          </div>

          <div className="shrink-0 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
            EchoGPT
          </div>
        </div>

        {/* Smaller Previews */}
        <div className="grid gap-6 md:grid-cols-2">
          {previews.slice(1).map((preview) => (
            <div
              key={preview.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 sm:p-4"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <Image
                  src={preview.image}
                  alt={preview.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text */}
              <div className="px-2 pb-2 pt-5">
                <h3 className="text-xl font-bold text-black">
                  {preview.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {preview.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

