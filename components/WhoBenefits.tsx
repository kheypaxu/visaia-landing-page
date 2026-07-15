import { beneficiaries } from "@/lib/content";
import Reveal from "./Reveal";

export default function WhoBenefits() {
  return (
    <section className="section-px py-16 md:py-24 bg-visaia-cream text-center">
      <Reveal>
        <h2 className="text-3xl md:text-5xl mb-12">Who Can Benefit</h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {beneficiaries.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div>
              <h3 className="text-visaia-leafDark text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-visaia-black/70 normal-case font-body">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}