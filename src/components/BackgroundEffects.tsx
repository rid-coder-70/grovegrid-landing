export const BackgroundEffects = () => {
  return (
    <>
      <div className="noise-overlay" />
      <div className="scanline" />
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-cyan-dim rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-cyan-dim rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none z-0" />
    </>
  );
};
