import Image1 from "../../assets/dfh.png";
import Image2 from "../../assets/hrdashboard.png";
import Image3 from "../../assets/airflow.jpg";
import Image4 from "../../assets/ongbe.jpg";

const data = [
  {
    id: 1,
    category: "Frontend",
    image: Image1,
    title: "Dahlia Family House",
    desc: "A responsive landing page for a villa, built with React and Vite. Includes information, gallery, testimonial, and contact link.",
    demo: "https://dahliafamilyhouse.com",
    github: "https://github.com/Dhorq/dfh",
  },
  {
    id: 2,
    category: "Backend",
    image: Image4,
    title: "Backend",
    desc: "Ongoing",
    demo: null,
    github: null,
  },
  {
    id: 3,
    category: "Tableau",
    image: Image2,
    title: "HR Dashboard",
    desc: "An interactive HR dashboard built with Tableau to visualize employee data.",
    demo: "https://drive.google.com/file/d/1IfpRgBkYGBTFenBEHfmiLuuctXtHHKAU/view",
    github: null,
  },
  {
    id: 4,
    category: "Data Pipeline",
    image: Image3,
    title: "Stock Market Pipeline",
    desc: "A data pipeline that extracts stock data from Yahoo Finance, stores it in MinIO, transforms it to CSV, and loads it into PostgreSQL for dashboarding with Metabase.",
    demo: null,
    github: "https://github.com/Dhorq/stock-market-pipeline",
  },
  {
    id: 5,
    category: "Data Pipeline",
    image: Image3,
    title: "APOD NASA ETL Pipeline",
    desc: "An ETL pipeline using Apache Airflow to extract, transform, and load NASA APOD data into PostgreSQL.",
    demo: null,
    github: "https://github.com/Dhorq/APOD-NASA-ETL-Pipeline",
  },
];

export default data;
