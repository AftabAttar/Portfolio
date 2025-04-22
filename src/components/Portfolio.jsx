import styles from "./Portfolio.module.css";
import Navbar from "./Navbar";
import Details from "./Details";
import { useRef } from "react";

export default function Portfolio() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const jobsRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className={styles.portfolio}>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, educationRef, jobsRef, projectRef, skillsRef }}
      />
      <Details
        aboutRef={aboutRef}
        educationRef={educationRef}
        jobsRef={jobsRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
      />
    </div>
  );
}
