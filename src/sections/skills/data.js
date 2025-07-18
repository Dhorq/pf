import { FaDatabase } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <FaDatabase />,
    title: "Data Analyst",
    desc: "Provide data analysis skills to help you understand trends, patterns, and opportunities hidden in your data",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Fullstack Development",
    desc: "I combine frontend and backend expertise to build seamless, scalable web applications that deliver excellent user experiences and robust functionality.",
  },
];

export default data;
