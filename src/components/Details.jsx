import styles from "./Details.module.css";
import About from "./About";
import Skills from "./Skills";
import Jobs from "./Jobs";
import Project from "./Project";
import Education from "./Education";
import myImg from "../assets/Aftab.jpg";

export default function Details({
  aboutRef,
  educationRef,
  jobsRef,
  projectRef,
  skillsRef,
}) {
  return (
    <div className={styles.details}>
      <div className={styles.myPhoto}>
        <img src={myImg} alt="Aftab Attar" />
      </div>
      <div className={styles.myDeteils}>
        <section ref={aboutRef} className={styles.section}>
          <About />
        </section>

        <section ref={skillsRef} className={styles.section}>
          <Skills />
        </section>

        <section ref={jobsRef} className={styles.section}>
          <Jobs />
        </section>

        <section ref={projectRef} className={styles.section}>
          <Project />
        </section>

        <section ref={educationRef} className={styles.section}>
          <Education />
        </section>
      </div>
    </div>
  );
}
