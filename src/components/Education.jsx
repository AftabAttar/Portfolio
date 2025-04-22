import styles from "./Education.module.css";
import EducationLogo from "../assets/scjit.png";
import Courseicon from "../assets/prepleaf.png";
import { forwardRef } from "react";

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.education}>
      <div className={styles.educationHeading}>
        <h2>Education</h2>
      </div>
      <div className={styles.course}>
        <div className={styles.courseName}>
          <img src={EducationLogo} alt="EducationLogo" />
          <div className={styles.collegeName}>
            <h3>Mechanical Engineering</h3>
            <p>SHRI CHIMASAHEB JAGDALE INSTITUTE OF TECHNOLOGY</p>
          </div>
        </div>
        <div className={styles.passOut}>
          <h3>2021-22</h3>
        </div>
      </div>

      <div className={styles.course}>
        <div className={styles.courseName}>
          <img src={Courseicon} alt="Courseicon" />
          <div className={styles.collegeName}>
            <h3>Full Stack Development</h3>
            <p>Prepleaf by Masai</p>
          </div>
        </div>
        <div className={styles.passOut}>
          <h3>current student</h3>
        </div>
      </div>
    </div>
  );
});

export default Education;
