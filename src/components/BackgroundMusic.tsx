import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const STORAGE_KEY_MUTED = "bg-music-muted";
const STORAGE_KEY_VOLUME = "bg-music-volume";

// مشغّل صوت واحد لكل التطبيق — يبقى يعمل عند التنقل بين الصفحات ولا يعيد من أول
function getSharedAudio(): HTMLAudioElement {
  if (typeof window === "undefined") return null as unknown as HTMLAudioElement;
  const key = "__bg_music_audio__";
  let audio = (window as unknown as { [k: string]: HTMLAudioElement })[key];
  if (!audio) {
    audio = new Audio("/app.mp3");
    audio.loop = true;
    audio.preload = "auto";
    (window as unknown as { [k: string]: HTMLAudioElement })[key] = audio;
  }
  return audio;
}

export function BackgroundMusic() {
  const [audio] = useState(() => getSharedAudio());
  const [isMuted, setIsMuted] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY_MUTED);
    return stored ? JSON.parse(stored) : false;
  });
  const [volume, setVolume] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY_VOLUME);
    return stored != null ? Number(stored) : 0.5;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [userMustClick, setUserMustClick] = useState(false);

  const tryPlay = useCallback(() => {
    audio.volume = volume;
    audio.muted = isMuted;
    audio.play().then(() => {
      setIsPlaying(true);
      setUserMustClick(false);
    }).catch(() => {
      setUserMustClick(true);
    });
  }, [audio, volume, isMuted]);

  // محاولة تشغيل تلقائي: نبدأ muted (المتصفحات تسمح به) ثم نرفع الكتم بعد لحظة
  const tryAutoplayUnmute = useCallback(() => {
    if (isMuted) return;
    audio.volume = volume;
    audio.muted = true;
    audio.play().then(() => {
      audio.muted = false;
      setIsPlaying(true);
      setUserMustClick(false);
    }).catch(() => setUserMustClick(true));
  }, [audio, volume, isMuted]);
  const tryPlayRef = useRef(tryPlay);
  tryPlayRef.current = tryPlay;
  const tryAutoplayRef = useRef(tryAutoplayUnmute);
  tryAutoplayRef.current = tryAutoplayUnmute;

  useEffect(() => {
    audio.volume = volume;
    audio.muted = isMuted;
    localStorage.setItem(STORAGE_KEY_VOLUME, String(volume));
  }, [audio, volume, isMuted]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MUTED, JSON.stringify(isMuted));
  }, [isMuted]);

  // أول ما يدخل الموقع — نحاول تشغيل الأغنية فوراً (مع أو بدون صوت حسب سياسة المتصفح)
  useEffect(() => {
    tryPlayRef.current();
    const retry = setTimeout(() => tryPlayRef.current(), 300);
    const autoplayMutedThenUnmute = setTimeout(() => tryAutoplayRef.current(), 500);
    return () => {
      clearTimeout(retry);
      clearTimeout(autoplayMutedThenUnmute);
    };
  }, []);

  // إذا المتصفح منع التشغيل التلقائي، أي تفاعل (ضغطة، لمس، تحريك، تمرير) يشغّل الأغنية
  useEffect(() => {
    if (!userMustClick) return;
    const onFirstInteraction = () => {
      tryPlayRef.current();
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("mousemove", onFirstInteraction);
    };
    window.addEventListener("click", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    window.addEventListener("touchstart", onFirstInteraction, { once: true });
    window.addEventListener("scroll", onFirstInteraction, { once: true, passive: true });
    window.addEventListener("mousemove", onFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("mousemove", onFirstInteraction);
    };
  }, [userMustClick]);

  const toggleMute = () => {
    if (userMustClick) {
      tryPlay();
      return;
    }
    setIsMuted((m) => !m);
  };

  const effectiveMuted = isMuted || !isPlaying;

  return (
    <>
      <TooltipProvider delayDuration={300}>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 rounded-xl border bg-background/95 p-1.5 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={toggleMute}
                aria-label={effectiveMuted ? "تشغيل الصوت" : "كتم الصوت"}
              >
                {effectiveMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              {userMustClick ? "اضغط لتشغيل الموسيقى" : effectiveMuted ? "تشغيل الصوت" : "كتم الصوت"}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center gap-1 px-1">
                <span className="text-[10px] text-muted-foreground">صوت</span>
                <Slider
                  orientation="vertical"
                  value={[volume * 100]}
                  onValueChange={([v]) => setVolume(v / 100)}
                  min={0}
                  max={100}
                  step={1}
                  className="h-20 w-4 flex shrink-0 [&_[data-orientation=vertical]]:w-4"
                  aria-label="مستوى الصوت"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">اسحب لرفع أو خفض الصوت</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </>
  );
}
