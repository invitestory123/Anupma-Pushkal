import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const heroArch = "https://media.invitestory.in/sage-parchment/src/assets/hero-arch.jpg";
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

      {/* Smooth bottom parchment gradient guaranteeing seamless transition and text clarity */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[68vh] bg-gradient-to-t from-parchment via-parchment/95 via-45% to-transparent" />

      {/* Shlok placed gracefully inside the arch above the couple */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={opened ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 1, delay: 0.25 }}
        className="relative z-20 w-full px-6 pt-28 text-center sm:pt-32"
      >
        <p className="font-serif text-xs tracking-[0.16em] text-pine font-semibold drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)] sm:text-sm sm:tracking-[0.18em] md:text-base">
          {invite.shlok}
        </p>
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-20 mt-auto w-full px-6 pt-12 pb-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={opened ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center gap-0.5 text-[0.72rem] font-semibold tracking-[0.28em] text-pine/90 uppercase drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] sm:text-xs"
        >
          <span>Mrs. Shashi Lata Jaiswal</span>
          <span className="font-display text-sm lowercase italic text-gold font-normal">&amp;</span>
          <span>Mr. Chandra Deo Jaiswal</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-2.5 max-w-md font-display text-base italic tracking-wide text-ink font-medium leading-relaxed drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] sm:text-lg"
        >
          {invite.line}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.4em" }}
          animate={opened ? { opacity: 1, y: 0, letterSpacing: "0.16em" } : false}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-lg text-4xl leading-tight font-light text-pine uppercase sm:text-5xl"
        >
          {couple.groomShort}
          <span className="mx-2.5 inline-block font-serif text-3xl font-light text-gold drop-shadow-sm sm:text-4xl">
            &amp;
          </span>
          {couple.brideShort}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={opened ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mx-auto mt-3 flex items-center justify-center gap-2 font-serif text-sm tracking-[0.15em] text-pine font-medium sm:text-base"
        >
          <span>Bound by प्यार</span>
          <span className="text-gold">•</span>
          <span>Blessed with साथ</span>
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
          className="mt-5 text-[0.68rem] tracking-[0.32em] text-gold uppercase font-medium sm:text-xs"
        >
          {invite.occasion}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-2 font-display text-3xl tracking-[0.18em] text-pine sm:text-4xl"
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
