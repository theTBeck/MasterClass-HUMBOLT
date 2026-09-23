import { useEffect, useRef, useState } from "react";
import { SITE, conceptWall, films, frames, slides } from "./content";

const stations = [
  ["Corpo", "Full frame, ISO-base, shutter 180° e ND variável"],
  ["Lentes", "As 11 Arles Prime, da 14 mm à 180 mm"],
  ["Exposição", "T-stop separado da luminância pelo eND"],
  ["Luz", "Dura, suave, motivada e negative fill"],
  ["Movimento", "Tripé, ombro e IBIS como linguagem"],
  ["Decisão", "A turma justifica o plano no monitor"],
];

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function App() {
  const [index, setIndex] = useState(0);
  const [light, setLight] = useState(false);
  const [soundOff, setSoundOff] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide = slides[index];
  const total = slides.length;
  const frame = frames[slide.id];

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setIndex((value) => Math.min(total - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
      if (event.key === "Home") setIndex(0);
      if (event.key === "End") setIndex(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (slide.kind !== "hero") {
      video.pause();
      return;
    }
    let cancel = false;
    const start = async () => {
      video.volume = 1;
      video.muted = false;
      try {
        await video.play();
      } catch {
        video.muted = true;
        await video.play().catch(() => undefined);
      }
      if (!cancel) setSoundOff(video.muted);
    };
    void start();
    const check = window.setTimeout(() => {
      if (!cancel) setSoundOff(video.muted);
    }, 400);
    return () => {
      cancel = true;
      window.clearTimeout(check);
    };
  }, [slide.kind]);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    void video.play();
    setSoundOff(false);
  };

  return (
    <div className="grid h-dvh grid-rows-[auto_minmax(0,1fr)_auto] bg-[var(--bg)] text-[var(--fg)]">
      <header className="z-10 flex items-center gap-4 border-b border-[var(--line)] bg-black px-6 py-3 text-white">
        <p className="font-bold">Masterclass Cinematografia: A Lente Humana</p>
        <div className="ml-auto">
          <button
            type="button"
            className="border border-white/30 px-3 py-1 text-sm"
            onClick={() => setLight((value) => !value)}
          >
            {light ? "Preto" : "Branco"}
          </button>
        </div>
      </header>

      <main aria-live="polite" className="relative min-h-0 overflow-hidden">
        {slide.kind === "hero" ? (
          <section className="grid h-full grid-rows-2 bg-black">
            <video
              ref={videoRef}
              className="h-full min-h-0 w-full object-cover"
              src={asset("reel.mp4")}
              autoPlay
              loop
              playsInline
              poster={asset("concepts/p004-d081ae1ea1.jpg")}
            />
            <div className="flex min-h-0 flex-col justify-center overflow-auto px-8 py-6 text-white md:px-10">
              <p className="text-sm uppercase text-[var(--accent)]">Reel · trilha original</p>
              <h1 className="mt-2 text-3xl font-bold leading-none">Thiago Beck</h1>
              <p className="mt-3 text-lg text-white/80">MasterClass Cinematografia - A Lente Humana</p>
              <p className="mt-3 text-white/80">
                “A criação da imagem deve ocorrer independentemente da câmera. Durante a leitura do argumento ou roteiro, uma narrativa visual deve se desenvolver, composta por fotogramas. A imagem é um dos alicerces que acompanham e sustentam a trama.”
              </p>
              <button type="button" className="mt-4 w-fit border border-white px-4 py-2 font-bold" onClick={enableSound}>
                {soundOff ? "Ligar trilha" : "Trilha ligada"}
              </button>
            </div>
          </section>
        ) : (
          <section className="grid h-full min-h-0 md:grid-cols-[minmax(280px,42%)_1fr]">
            <div className="min-h-0 overflow-auto px-6 py-6 md:px-10 md:py-8">
              <p className="text-sm uppercase text-[var(--accent)]">
                {slide.time ? `${slide.kicker} · ${slide.time}` : slide.kicker}
              </p>
              <h1 className={`mt-3 font-bold leading-tight text-balance ${slide.id === "beck" ? "text-3xl md:text-4xl" : "text-2xl md:text-4xl"}`}>
                {slide.title}
              </h1>
              <Copy slideId={slide.id} />
            </div>
            <Figure slideId={slide.id} frame={frame} title={slide.title} />
          </section>
        )}
      </main>

      <footer className="flex items-center gap-4 border-t border-[var(--line)] bg-black px-6 py-3 text-white">
        <button
          type="button"
          className="border border-white/30 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          disabled={index === 0}
        >
          Anterior
        </button>
        <button
          type="button"
          className="border border-white px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setIndex((value) => Math.min(total - 1, value + 1))}
          disabled={index === total - 1}
        >
          Próximo
        </button>
        <p className="text-sm text-white/70">
          {index + 1} / {total}
        </p>
        <div className="ml-auto h-1 w-48 bg-white/20" aria-hidden="true">
          <div className="h-full bg-[var(--accent)]" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
      </footer>
    </div>
  );
}

function Copy({ slideId }: { slideId: string }) {
  const slide = slides.find((item) => item.id === slideId);
  if (!slide) return null;

  return (
    <>
      {slide.paragraphs && (
        <div className="mt-6 grid max-w-xl gap-3">
          {slide.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-xl leading-snug text-[var(--fg)] md:text-2xl">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {slide.points && (
        <ul className="mt-6 grid max-w-xl gap-3">
          {slide.points.map((point) => (
            <li key={point} className="border-t border-[var(--line)] pt-3">
              {point}
            </li>
          ))}
        </ul>
      )}
      {slide.kind === "films" && (
        <div className="mt-6 grid grid-cols-2 gap-2">
          {films.map((film) => (
            <a key={film.src} href={SITE} className="card block border border-[var(--line)] bg-[var(--chip)]">
              <img src={asset(film.src)} alt="" className="aspect-video w-full object-cover" />
              <span className="block px-2 py-2">
                <span className="block text-sm font-bold">{film.title}</span>
                <span className="text-xs text-[var(--muted)]">{film.meta}</span>
              </span>
            </a>
          ))}
        </div>
      )}
      {slide.people && (
        <div className="mt-6 grid gap-4">
          {slide.people.map((person) => (
            <article key={person.name} className="border border-[var(--line)]">
              {person.poster ? (
                <img src={asset(person.poster)} alt="" className="aspect-video w-full object-cover" />
              ) : null}
              <div className="p-4">
                <p className="text-sm text-[var(--accent)]">{person.role}</p>
                <h2 className="mt-1 text-2xl font-bold">{person.name}</h2>
                <p className="mt-1 text-[var(--muted)]">{person.work}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={person.filmUrl} target="_blank" rel="noreferrer" className="border border-[var(--fg)] px-3 py-2 text-sm font-bold">
                    Filme
                  </a>
                  <a href={person.profileUrl} target="_blank" rel="noreferrer" className="border border-[var(--line)] px-3 py-2 text-sm font-bold">
                    Perfil
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {slide.kind === "china" && (
        <div className="mt-6 grid max-w-xl gap-3 text-[var(--muted)]">
          <p className="text-[var(--fg)]">
            Em março de 2026, o Stanford HAI mediu o melhor modelo americano 2,7% à frente do melhor modelo chinês. A China lidera publicações, citações, volume de patentes e robótica industrial.
          </p>
          <p>
            No vídeo, Wan, Seedance, Kling e MiniMax disputam as primeiras posições em arenas independentes. A liderança muda com a versão, o preço e a data da medição.
          </p>
          <p>Pequim publicou incentivos a IA aplicada ao audiovisual. Isso demonstra política industrial.</p>
        </div>
      )}
      {slide.kind === "workshop" && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {stations.map(([name, detail], station) => (
            <article key={name} className="border border-[var(--line)] p-4">
              <p className="text-sm text-[var(--accent)]">0{station + 1}</p>
              <h2 className="mt-1 text-xl font-bold">{name}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
            </article>
          ))}
        </div>
      )}
      {slide.kind === "close" && (
        <a href={SITE} className="mt-8 inline-block border border-[var(--fg)] px-5 py-3 font-bold">
          Abrir o DoP Reel
        </a>
      )}
    </>
  );
}

function Figure({ slideId, frame, title }: { slideId: string; frame?: string; title: string }) {
  if (slideId === "intencao") {
    return (
      <div className="grid h-full min-h-48 grid-cols-2 grid-rows-4">
        {conceptWall.map((src) => (
          <img key={src} src={asset(src)} alt="" className="h-full w-full object-cover" />
        ))}
      </div>
    );
  }

  if (!frame) return <div className="hidden bg-black md:block" />;

  return (
    <img
      src={asset(frame)}
      alt=""
      className="h-56 w-full object-cover md:h-full"
      title={title}
    />
  );
}
