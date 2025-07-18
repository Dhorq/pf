import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/testcv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p className="about__paragraph">
            I’m a fresh graduate with a strong passion for data analysis and
            problem solving. During my studies, I discovered my love for working
            with data and turning raw information into meaningful insights. Over
            time, this curiosity has naturally expanded into building things
            with code, especially websites and web applications. Now, I’m
            excited to grow as a full-stack developer. I enjoy designing
            user-friendly interfaces, writing clean code, and bringing ideas to
            life on the web. For me, combining data skills with web development
            is the perfect way to build products that are not only beautiful but
            also smart and impactful. I’m always eager to learn new technologies
            and collaborate with others. I believe that every project is an
            opportunity to keep improving and to deliver real value through my
            work.
          </p>
          <div className="cv">
            <a href={CV} download className="btn primary">
              Download CV <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
