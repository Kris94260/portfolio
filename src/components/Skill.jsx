import PropTypes from "prop-types";

const Skill = (props) => {
  if (props.skill == "réseaux" || props.skill =="virtualisation"){
    return(
      <div className="skill">
        <p className="skill-img">{props.skill}</p>
      </div>
    )
  }
  else{
  return (
    <div className="skill">
      <img src={`/skills/${props.skill}`} alt="" className="skill-img" />
    </div>
  )};
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
