import { useState } from "react";
import { links } from "../config/links";

const MobileFallback = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.this);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setFadingOut(true);
    setTimeout(() => {
      setFadingOut(false);
      setVisible(true);
    }, 1001);
    setTimeout(() => setVisible(false), 1000);
  };

  return (
    <div className="fixed inset-0 bg-[#008080] text-white flex items-center justify-center">
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          fadingOut ? "opacity-0" : "opacity-100"
        } ${visible ? "block" : "hidden"}`}
      >
        <div className="bg-gray-100 text-black border-2 border-black shadow-[8px_8px_0_0_black] max-w-xs w-full p-4 text-center font-mono rounded-md">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">⚠️ System Alert</span>
            <button
              onClick={handleClose}
              className="text-sm bg-red-600 text-white px-2 py-0.5 cursor-pointer"
            >
              X
            </button>
          </div>

          <p className="mb-4">
            This 3D experience is too <i>thicc</i> for mobile screens. Please
            use a desktop computer. Preferably one from this century.
          </p>

          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-3 py-1 rounded border border-black hover:bg-blue-700 cursor-pointer"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>

          <p className="text-xs text-gray-500 mt-2">
            Or just remember <code>sorinraduta.ro</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFallback;
