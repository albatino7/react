import React from "react";
import { useLoaderData } from "react-router";

const AboutPages = () => {
  console.log("About chla .....................");

  const { getAllProducts, getAlluser } = useLoaderData();
  console.log(getAllProducts);
  console.log(getAlluser);
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            About Us
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            We build simple things
            <span className="text-blue-600"> beautifully.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Our goal is to create simple, useful and enjoyable experiences with
            modern web technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              🚀
            </div>

            <h2 className="mb-2 text-xl font-semibold text-slate-900">Fast</h2>

            <p className="leading-7 text-slate-500">
              We focus on creating fast and smooth experiences for everyone.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              💡
            </div>

            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              Simple
            </h2>

            <p className="leading-7 text-slate-500">
              We believe good design should be easy to understand and use.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              ❤️
            </div>

            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              User First
            </h2>

            <p className="leading-7 text-slate-500">
              Every feature is designed with the user experience in mind.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">
            Built with modern technology
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-400">
            We use modern tools and technologies to build reliable, maintainable
            and scalable web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPages;
