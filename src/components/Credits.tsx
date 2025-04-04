const credits = [
  {
    name: "Non-Realistic Clipboard by kareem.noureddine02",
    url: "https://skfb.ly/p9q7H",
  },
  {
    name: "Macbook pro M3 16 inch 2024 by jackbaeten",
    url: "https://skfb.ly/oQJZu",
  },
];

export default function Credits() {
  return (
    <div className="flex flex-col text-[#F5EBDD] gap-4 w-[700px] h-[500px] pl-20 pt-20 bg-transparent">
      <h1 className="text-2xl font-bold credits-text" data-text="Credits">
        Credits
      </h1>
      <div className="flex flex-col gap-2">
        {credits.map((credit) => (
          <div key={credit.url}>
            <a
              href={credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="credits-text"
              data-text={credit.name}
            >
              {credit.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
