
import "../App.css";
import veille2 from "../content/veille2";
import Veilles from "./Veilles";
import Heading from "./Heading";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



function OrdiQuantiques() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      };

  return (
    <>
    <header className="header">
      <nav>
        <div className="logo">
          <a href="/">
          &lt;Kris
            <span>Moreau&#47;&gt;</span>
          </a>
        </div>
        <div className="menu">
        <a href="/" className="navbar-btn">RETOUR</a>
        </div>
      </nav>
    </header><br/><br/>

    <body>
        <p className="menu"><h2>Veille 1 :</h2></p><br/>
        <section id="projects">
        <Heading firstWord="Ordinateurs" secondWord=" quantiques" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {veille2.map((veille, index) => (
            <div key={index}>
              <Veilles
                name={veille.name}
                description={veille.description}
                sourceCode={veille.sourceCode}
                date={veille.date}
                img="/ordinateur-quantique.jpg"
              />
            </div>
          ))}
        </motion.div>
      </section><br/>
        
        
        <br/><br/>

    
    </body>
    </>

  );
};


export default OrdiQuantiques;