import { MapPin, Navigation, Phone } from "lucide-react";
import { invitation } from "@/config/invitation";
import { directionsUrl, mapsUrl } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function Venue() {
  const { venue, footer } = invitation;
  const embedUrl = `https://www.google.com/maps?q=${venue.lat},${venue.lng}(${encodeURIComponent(venue.name)})&z=15&output=embed`;

  return (
    <section id="venue" className="relative px-5 py-20">
      <Reveal className="mx-auto mb-8 max-w-md text-center">
        <p className="text-[0.68rem] tracking-[0.42em] text-gold uppercase">Where</p>
        <h2 className="mt-3 font-display text-3xl text-pine sm:text-4xl">{venue.name}</h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />
        <p className="mt-3 text-sm leading-relaxed text-ink/75">{venue.address}</p>
      </Reveal>

      <Reveal className="mx-auto max-w-lg">
        {/* Interactive Google Map in Rajwada Royale format */}
        <div className="overflow-hidden rounded-[2.5rem] border border-gold/45 shadow-[0_20px_50px_-30px_rgba(26,47,35,0.35)]">
          <iframe
            title={`Map showing ${venue.name}`}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 sm:h-80"
          />
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={directionsUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-xs tracking-[0.2em] text-parchment uppercase shadow-md transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Navigation className="size-4 text-gold" aria-hidden />
            Get directions
          </a>
          <a
            href={mapsUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/70 bg-parchment/80 px-6 py-3.5 text-xs tracking-[0.2em] text-ink uppercase shadow-sm transition-colors hover:bg-gold/15 active:scale-95"
          >
            <MapPin className="size-4 text-gold" aria-hidden />
            Open in Maps
          </a>
        </div>

        {"directionsNote" in venue && venue.directionsNote && (
          <p className="mt-4 text-center text-xs italic text-ink/65">
            {venue.directionsNote}
          </p>
        )}

        {/* Rajwada Royale "For any help" card */}
        <div className="mt-8 rounded-[2rem] border border-gold/40 bg-parchment-deep/60 px-6 py-5 shadow-sm">
          <p className="text-[0.62rem] font-medium tracking-[0.3em] text-gold uppercase">
            For any assistance
          </p>
          <ul className="mt-3 space-y-3">
            {footer.contacts.map((c) => (
              <li key={c.phone} className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-pine">
                  {c.name}
                  {c.relation ? (
                    <span className="text-xs text-ink/60 font-normal"> ({c.relation})</span>
                  ) : null}
                </span>
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-parchment px-3.5 py-1.5 text-xs font-semibold text-pine transition-colors hover:bg-gold/15 active:scale-95"
                >
                  <Phone className="size-3 text-gold" aria-hidden />
                  Call
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
