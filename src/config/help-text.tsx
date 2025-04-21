import { links } from "./links";

export const helpText = [
  {
    title: "🔄 Navigation",
    content:
      "In order to see the next view, scroll down. If you want to go back, scroll up.",
  },
  {
    title: "🫵 Clickable elements",
    content: (
      <p>
        Certain elements are interactive. Clicking on them will trigger their
        functionality. For example, a click on the clock will take you to the
        next view.{" "}
        <a
          href={links["1337"]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc]"
        >
          What time is it?
        </a>
      </p>
    ),
  },
  {
    title: "👤 About me",
    content: (
      <p>
        Here you can find more about me, my hobbies and how to can get in touch.
        <br />
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc]"
        >
          Let's connect!
        </a>
      </p>
    ),
  },
  {
    title: "📁 Portfolio",
    content:
      "Explore my projects by clicking on the folders in the drawer. Each folder represents a different project with its own story to tell.",
  },
  {
    title: "✉️ Contact",
    content: (
      <p>
        Have a project in mind? Feel free to reach out at{" "}
        <a href={links.email} className="text-[#cccccc]">
          sorinradutaa@gmail.com
        </a>{" "}
        or simply fill out the contact form.
        <br />
        The mug holds a little surprise (and no, it’s not just coffee).
      </p>
    ),
  },
  {
    title: "🎓 Credits",
    content: (
      <p>
        Project made with ❤️ by Sorin Raduta. You can find the source code and
        much more on my{" "}
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cccccc]"
        >
          GitHub
        </a>
        .
      </p>
    ),
  },
];
