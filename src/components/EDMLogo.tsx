const EDMLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/60" />
        {/* Inner gradient orb */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-80" />
        {/* Center dot */}
        <div className="absolute inset-[14px] rounded-full bg-background" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold tracking-tight text-foreground">EDM</span>
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider">v0.4.0</span>
      </div>
    </div>
  );
};

export default EDMLogo;
