import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function Blessing() {
  const { blessing } = invitation;

  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto max-w-md text-center">
        <div className="mx-auto w-20 gold-rule" />
        {("shlok" in blessing) && (
          <p className="mt-7 font-serif text-lg tracking-[0.15em] text-gold sm:text-xl">
            {blessing.shlok}
          </p>
        )}
        <p className="mt-4 font-display text-2xl leading-relaxed text-pine">{blessing.line}</p>
        <p className="mt-5 font-display text-lg leading-relaxed italic text-ink/75">
          “{blessing.translation}”
        </p>
        <p className="mt-4 text-[0.65rem] tracking-[0.25em] text-gold uppercase">{blessing.source}</p>
        <div className="mx-auto mt-8 w-20 gold-rule" />
      </Reveal>
    </section>
  );
}
