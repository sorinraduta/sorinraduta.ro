import { faqs } from "../config/faqs";
import { links } from "../config/links";
import About from "./About";
import ContactForm from "./ContactForm";
import Credits from "./Credits";

const projects = [
  {
    name: "Sepolia Faucet Automation",
    url: links.project1,
    description: "Automated Sepolia testnet ETH faucet requests.",
  },
  {
    name: "Matrix Patterns",
    url: links.project2,
    description:
      "Formulas for building matrix patterns, developed back in high school.",
  },
  {
    name: "Counter-Strike Plugins",
    url: links.project3,
    description: "A collection of custom Counter-Strike 1.6 server plugins.",
  },
];

export const SEOContent = () => {
  return (
    <div className="sr-only">
      <header>
        <h1>Sorin Raduta — Software Engineer</h1>
        <p>
          Welcome — I'm Sorin Raduta, a software engineer who builds systems
          that scale, using AI to move faster without cutting corners. This
          site is my interactive 3D office: click around the desk to find
          highlighted projects, a short bio, hobbies, social links, and a
          contact form.
        </p>
      </header>
      <main>
        <section aria-label="About">
          <About />
        </section>
        <section aria-label="Projects">
          <h2>Highlighted Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.url}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section aria-label="Contact">
          <ContactForm />
        </section>
        <section aria-label="Frequently Asked Questions">
          <h2>FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
        <footer aria-label="Credits">
          <Credits />
        </footer>
      </main>
    </div>
  );
};
