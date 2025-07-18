import Card from "../../components/Card";
import data from "./data";
import "./skills.css";

const skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>I am committed to providing excellence in each of my skills.</p>
      <div className="container skills__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default skills;
