import { links } from "../config/links";
import useCameraStore from "../hooks/useCameraStore";

const hobbies = [
  { name: "Gym", emoji: "🏋🏻‍♂️" },
  { name: "Chess", emoji: "♟️" },
  { name: "Snowboard", emoji: "🏂" },
  { name: "Hiking", emoji: "🥾" },
  { name: "Karting", emoji: "🏎️" },
  { name: "Traveling", emoji: "✈️" },
  { name: "Target shooting", emoji: "🎯" },
  { name: "Motocycle", emoji: "🏍️" },
];

const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub",
    url: links.github,
    svg: (
      <svg
        className="w-5 h-5"
        fill="#333"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: links.linkedin,
    svg: (
      <svg
        className="w-5 h-5"
        fill="#0A66C2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    label: "X (formerly Twitter)",
    url: links.twitter,
    svg: (
      <svg
        className="w-5 h-5"
        fill="#000000"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    label: "Send email",
    url: links.email,
    svg: (
      <svg
        className="w-5 h-5"
        fill="#000000"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
];

export default function About() {
  const { setView } = useCameraStore();

  const onOpenToWorkClick = () => {
    setView("contact");
  };

  return (
    <div className="p-6 w-[325px] h-[460px] text-black rounded-lg shadow-md flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-2">
        <h2 className="text-lg font-semibold">Sorin Raduta</h2>
        <span className="text-gray-400">|</span>
        <h3 className="text-sm text-gray-600">Software Engineer</h3>
      </div>

      <div className="flex justify-center mb-4">
        <div
          onClick={onOpenToWorkClick}
          className="flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium animate-pulse cursor-pointer"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Open to Work</span>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="font-semibold mb-2 text-gray-800">Bio</h3>
        <p className="text-xs text-gray-700">
          Software engineer passionate about crafting clean, maintainable code.
          This interactive space reflects my approach to balancing technical
          expertise with creative experiences.
          <br />I continuously refine my skills while bringing a fresh
          perspective to every project I undertake.
        </p>
      </div>

      <div className="mb-5">
        <h3 className="font-semibold mb-2 text-gray-800">Hobbies</h3>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 text-xs bg-gray-100/80 px-2 py-1 rounded-full"
            >
              <span>{hobby.emoji}</span>
              <span>{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-300">
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center w-9 h-9 rounded-full bg-gray-100"
              aria-label={social.label}
            >
              {social.svg}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
