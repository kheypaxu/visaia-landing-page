import { teamMembers } from "@/lib/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="section-px py-12 bg-visaia-black text-white/70">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="inline-block h-3 w-3 rounded-sm bg-visaia-leaf" />
              <span className="font-display text-lg tracking-wide">VISAIA</span>
            </div>
            <p className="mt-3 text-xs normal-case font-body max-w-xs">
              © 2026 VISAIA. Precision Intelligence for Sustainable Agriculture.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Team</p>
            <ul className="space-y-1 text-xs normal-case font-body">
              {teamMembers.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}