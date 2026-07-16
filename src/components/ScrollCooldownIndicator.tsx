interface ScrollCooldownIndicatorProps {
  active: boolean;
  duration: number;
}

const ScrollCooldownIndicator = ({
  active,
  duration,
}: ScrollCooldownIndicatorProps) => {
  if (!active) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pointer-events-none">
      <div className="h-[3px] w-28 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full w-full origin-left scale-x-0 rounded-full bg-white/80"
          style={{
            animation: `scroll-cooldown-fill ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
};

export default ScrollCooldownIndicator;
