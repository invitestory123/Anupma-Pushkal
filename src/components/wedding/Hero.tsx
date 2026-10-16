import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const heroArch = "https://media.invitestory.in/sage-parchment/src/assets/hero-arch.jpg";
import boundByPyar from "@/assets/bound-by-pyar.png";
import { invitation } from "@/config/invitation";
import { AuroraBackdrop } from "./AuroraBackdrop";
import { useOpened } from "./OpenGate";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const { couple, invite, event, venue } = invitation;
  const opened = useOpened();

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-parchment"
    >
      <AuroraBackdrop />

      <motion.div style={{ y: imgY }} className="absolute -top-10 inset-x-0 bottom-0">
        <img
          src={heroArch}
          alt="Illustrated Mughal arch with couple"
          width={1024}
          height={1536}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine/25 via-transparent via-40% to-parchment" />
      </motion.div>

      {/* Fixed bottom gradient to guarantee seamless transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-72 bg-gradient-to-t from-parchment via-parchment/95 via-60% to-transparent" />

      <motion.div
        style={{ y: textY }}
        className="relative z-20 mt-auto w-full px-6 pt-24 pb-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={opened ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-sm tracking-[0.18em] text-gold sm:text-base"
        >
          {invite.shlok}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={opened ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 text-[0.68rem] tracking-[0.38em] text-ink/75 uppercase"
        >
          {invite.kicker}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-2 text-xs text-ink/70"
        >
          {invite.line}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.4em" }}
          animate={opened ? { opacity: 1, y: 0, letterSpacing: "0.16em" } : false}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-lg text-4xl leading-tight font-light text-pine uppercase sm:text-5xl"
        >
          {couple.brideShort}
          <span className="mx-3 inline-block font-display text-2xl lowercase italic text-pine/70">
            and
          </span>
          {couple.groomShort}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={opened ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mx-auto mt-3 max-w-[260px] sm:max-w-[300px]"
        >
          <img
            src={boundByPyar}
            alt="Bound by प्यार, Blessed with साथ"
            className="w-full object-contain mix-blend-multiply opacity-95"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={opened ? { opacity: 1, scaleX: 1 } : false}
          transition={{ duration: 1.2, delay: 0.85 }}
          className="mx-auto mt-4 w-52 gold-rule"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1 }}
          className="mt-5 text-[0.68rem] tracking-[0.32em] text-gold uppercase"
        >
          {invite.occasion}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-2 font-display text-3xl tracking-[0.18em] text-pine"
        >
          {event.dateLabel}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-2 text-[0.72rem] tracking-[0.25em] text-ink/70 uppercase"
        >
          {venue.name}
        </motion.p>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-20 pb-6 text-center">
        <span className="text-[0.6rem] tracking-[0.3em] text-ink/60 uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-2 h-8 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
