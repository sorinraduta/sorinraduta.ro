import { useProgress } from "@react-three/drei";

const getRandomArbitrary = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const Loading = () => {
  const { progress } = useProgress();

  return (
    <div className="fixed bg-[#000] size-full top-[10px] left-0 transition-all duration-700">
      <h1 className="text-4xl tracking-widest font-semibold uppercase text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        Loading...
      </h1>
      <div
        className="h-[11px] bg-[#000] top-[-11px] w-full absolute transition-all duration-300 bottom-0"
        style={{
          transform: `translateX(${progress}%)`,
        }}
      />
    </div>
  );
};

export default Loading;
