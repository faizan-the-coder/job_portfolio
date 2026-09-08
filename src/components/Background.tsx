export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#08080f]" aria-hidden>
      {/* base gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-8%,rgba(124,58,237,0.32),transparent_65%),radial-gradient(800px_420px_at_85%_25%,rgba(168,85,247,0.14),transparent_60%),radial-gradient(700px_500px_at_8%_70%,rgba(76,29,149,0.22),transparent_60%)]" />
      {/* dot pattern */}
      <div className="bg-dotgrid absolute inset-0 opacity-60 [mask-image:radial-gradient(75%_60%_at_50%_35%,black,transparent)]" />
      {/* grain */}
      <div className="bg-noise absolute inset-0 opacity-[0.05]" />
      {/* floating blurred shapes */}
      <div className="animate-drift-slow absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[130px]" />
      <div className="animate-drift-slow-2 absolute top-[38%] -left-40 h-[380px] w-[380px] rounded-full bg-fuchsia-500/12 blur-[120px]" />
      <div className="animate-drift-slow absolute right-[-140px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-indigo-600/18 blur-[130px]" />
    </div>
  );
}
