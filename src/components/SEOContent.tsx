import About from "./About";
import ContactForm from "./ContactForm";
import Credits from "./Credits";

export const SEOContent = () => {
  return (
    <div className="sr-only">
      <About />
      <ContactForm />
      <Credits />
    </div>
  );
};
