import { startFeatures } from "@/lib/content";

export default function StartWithVisaia() {
  return (
    <section className="section-px py-16 md:py-24 bg-visaia-black text-center">
      <h2 className="text-3xl md:text-5xl text-white mb-10">Start With VISAIA</h2>

      <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-left">
        {startFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-visaia-leaf text-visaia-black text-xs">
              ✓
            </span>
            <span className="text-white/85 text-sm normal-case font-body">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}