import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section className="section-px py-16 md:py-20 bg-visaia-cream text-center">
      <Reveal>
        <p className="eyebrow">Our Mission</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-xl md:text-3xl leading-snug">
          To empower farmers and agricultural institutions with intelligent technologies that
          improve pest surveillance, reduce crop losses, and promote sustainable corn production.
        </h2>
      </Reveal>
    </section>
  );
}