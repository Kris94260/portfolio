
import "../App.css";
import veille1 from "../content/veille1";
import Veilles from "./Veilles";
import Heading from "./Heading";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



function IA() {
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
        <p className="menu"><h2>Veille 2 :</h2></p><br/>
        <section id="projects">
        <Heading firstWord="L'intelligence" secondWord=" artificielle" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {veille1.map((veille, index) => (
            <div key={index}>
              <Veilles
                name={veille.name}
                description={veille.description}
                sourceCode={veille.sourceCode}
                date={veille.date}
                img= "/IA.png"
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


export default IA;