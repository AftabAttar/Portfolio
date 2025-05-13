import styles from "./Skills.module.css";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import gitIcon from "../assets/git.png";
import linuxIcon from "../assets/linux.png";
import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.skillCompo}>
      <h2 className={styles.skillsHeading}>Skills</h2>
      <div className={styles.skills}>
        <div className={styles.skillInfo}>
          <img src={htmlIcon} alt="HTML logo" />
          <h4>HTML</h4>
        </div>

        <div className={styles.skillInfo}>
          <img src={cssIcon} alt="CSS logo" />
          <h4>CSS</h4>
        </div>

        <div className={styles.skillInfo}>
          <img src={jsIcon} alt="JAVASCRIPT logo" />
          <h4>JavaScript</h4>
        </div>

        <div className={styles.skillInfo}>
          <img src={reactIcon} alt="REACT logo" />
          <h4>React</h4>
        </div>

        <div className={styles.skillInfo}>
          <img src={gitIcon} alt="GIT logo" />
          <h4>Git</h4>
        </div>
      </div>
    </div>
  );
});

export default Skills;
