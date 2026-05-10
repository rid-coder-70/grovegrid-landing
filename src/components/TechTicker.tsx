export const TechTicker = () => {
  const techs = [
    "TYPESCRIPT", "NODE.JS", "NEXT.JS", "TAILWIND CSS", "POSTGRESQL", 
    "DOCKER", "AWS / GCP", "ZAPIER", "MAKE.COM", "REST APIs", 
    "GRAPHQL", "CI / CD"
  ];

  return (
    <div className="w-full overflow-hidden bg-panel border-y border-borderCol py-3 relative z-20">
      <div className="absolute inset-0 bg-cyan-default opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="ticker-track font-mono text-xs md:text-sm text-textMuted uppercase tracking-widest items-center">
        <div className="flex items-center whitespace-nowrap">
          {techs.map((tech, i) => (
            <span key={i} className="flex items-center">
              {tech} <span className="mx-6 text-cyan-default text-[8px]">◆</span>
            </span>
          ))}
        </div>
        <div className="flex items-center whitespace-nowrap">
          {techs.map((tech, i) => (
            <span key={`dup-${i}`} className="flex items-center">
              {tech} <span className="mx-6 text-cyan-default text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
