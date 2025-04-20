import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

interface HelpOverlayProps {
  title?: string;
  content: React.ReactNode;
  buttonText?: string;
}

const HelpOverlay = ({
  title = "",
  content,
  buttonText = "Got it",
}: HelpOverlayProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#7d7878]/80 backdrop-blur-sm transition-all hover:bg-[#7d7878]/90 dark:bg-[#7d7878]/75 dark:hover:bg-[#7d7878]/85"
        aria-label="Help"
      >
        <span className="text-3xl font-bold text-white">?</span>
      </button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition duration-100"
        enterFrom="opacity-100"
        enterTo="opacity-100"
        leave="transition duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute bottom-14 right-0 w-[21rem] rounded-2xl bg-[#7d7878]/90 p-5 shadow-lg dark:bg-[#7d7878]/95">
          <h3 className="text-lg font-medium leading-6 text-white">{title}</h3>

          <div className="mt-2.5 mb-5">
            <p className="text-base leading-relaxed text-gray-100">{content}</p>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-white/20 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default HelpOverlay;
