import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const Veilles = (props) => {
  return (
    <div className="project-card">
        <br/><br/><br/>
        <div className="project-img">
            <img src={props.img} />
        </div>
        <p>{props.description}</p><br/><br/><br/>
        <div className="project-links">
            <a href={props.sourceCode} target="_blank">
            {props.name} <FaExternalLinkAlt />
            </a>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <p>{props.date}</p>
      


    </div>
  );
};

Veilles.propTypes = {
    img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
};

export default Veilles;
