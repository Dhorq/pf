import { useEffect } from "react";
import faqs from "./data";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import "./faq.css";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section id="faqs">
      <h2>FAQ</h2>
      <p>
        These are some common questions people ask me. If you’re still curious,
        just drop me a message through my contact page!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
