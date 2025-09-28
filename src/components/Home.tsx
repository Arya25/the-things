import { activeProjects } from "../data/projects";
import Mission from "./Mission";
import ProjectsRail from "./ProjectRail";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          A community-built network of sensors across New York.
        </h1>

        <p className="mt-3 text-lg text-slate-600 max-w-prose">
          We are a non-profit community supporting a free network for remote
          sensing for education, civic empowerment, and economic development in
          New York and around the world!
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-block px-4 py-2 rounded-md bg-black text-white font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
          >
            How does it work?
          </a>
          <a
            href="#"
            className="inline-block px-4 py-2 rounded-md border border-slate-200 font-semibold hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            Get Involved
          </a>
        </div>
      </section>
      {/* mission */}
      <Mission />
      <ProjectsRail items={activeProjects} />
    </>
  );
}
