import React from "react";
import { Navigation } from "../components/nav";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-32 mx-auto max-w-4xl lg:px-8">
        <h1 className="text-4xl font-extrabold text-zinc-100 font-display">About Me</h1>
        <p className="mt-6 text-lg text-zinc-400">
          This is a default portfolio About page. Replace this copy with a short
          bio, links to your socials, and highlights of projects or experience.
        </p>

        <div className="mt-10 space-y-6">
          <section className="p-6 bg-zinc-900/40 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-bold text-zinc-100">Background</h2>
            <p className="mt-3 text-zinc-400">
              I build web apps and developer tools. This page is a placeholder
              using the site's existing styles — edit `app/about/page.tsx` to
              add your real content.
            </p>
          </section>

          <section className="p-6 bg-zinc-900/40 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-bold text-zinc-100">Current Work</h2>
            <p className="mt-3 text-zinc-400">Working on open-source projects and product ideas.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
