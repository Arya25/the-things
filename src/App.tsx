import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            A community-built network for sensors across NYC.
          </h1>

          <p className="mt-3 text-lg text-slate-600 max-w-prose">
            We run an open LoRaWAN for education, research, and civic projects.
            Explore success stories or get involved.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-md bg-black text-white font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            >
              See Success Stories
            </a>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-md border border-slate-200 font-semibold hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
