import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="section-px py-20 md:py-28 bg-visaia-cream text-center">
      <Reveal>
        <h2 className="text-2xl md:text-4xl text-visaia-title">One Platform, Smarter Pest Management.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-visaia-black/70 font-jakarta normal-case">
          VISAIA is an intelligent pest management system designed to support corn farmers and
          agricultural agencies through AI-powered pest detection, real-time monitoring, and
          data-driven decision-making. Built for the Regional Crop Protection Center (RCPC), Local
          Government Units (LGUs), and farmers, VISAIA makes pest surveillance faster, more
          accurate, and more accessible.
        </p>
      </Reveal>
    </section>
  );
}