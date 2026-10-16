import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { invitation } from "@/config/invitation";
import { useOpened } from "./OpenGate";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const opened = useOpened();

  const musicUrl = "music" in invitation ? invitation.music.url : "/music.mp3";
  const musicTitle = "music" in invitation ? invitation.music.title : "Background Music";

  // Listen to direct user tap on "Open the invitation"
  useEffect(() => {
    const handleTrigger = () => {
      setHasInteracted(true);
      if (audioRef.current && audioAvailable) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };
    window.addEventListener("play-invitation-music", handleTrigger);
    return () => window.removeEventListener("play-invitation-music", handleTrigger);
  }, [audioAvailable]);

  // Fallback try to play when the gate opens
  useEffect(() => {
    if (opened && !hasInteracted && audioRef.current && audioAvailable) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until direct button click
          setIsPlaying(false);
        });
    }
  }, [opened, hasInteracted, audioAvailable]);

  const toggleMusic = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleError = () => {
    // If the audio source is not found or fails, gracefully hide error
    setAudioAvailable(false);
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
        onError={handleError}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute music" : "Play celebration music"}
        title={isPlaying ? `Pause ${musicTitle}` : `Play ${musicTitle}`}
        className="fixed top-5 right-5 z-40 flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/85 px-3 py-2 text-ink shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex size-4 items-center justify-center text-pine">
          {isPlaying ? (
            <Volume2 className="size-4 text-pine" />
          ) : (
            <VolumeX className="size-4 text-ink/50" />
          )}
        </span>

        {/* Animated equalizer waves when playing */}
        {isPlaying ? (
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-full bg-gold animate-[pulse_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-2/3 bg-gold animate-[pulse_0.6s_ease-in-out_infinite_0.2s]" />
            <span className="w-0.5 h-4/5 bg-gold animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
          </span>
        ) : (
          <span className="text-[9px] tracking-wider text-ink/60 uppercase font-medium">
            Music
          </span>
        )}
      </button>
    </>
  );
}
