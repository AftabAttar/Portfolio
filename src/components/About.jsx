import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.myInfo}>
        <h2>Aftab Attar</h2>
        <p>
          Aspiring Front-End Developer Skilled in crafting responsive,
          user-friendly web interfaces using HTML5, CSS3, JavaScript, and React,
          with hands-on experience in Bootstrap for rapid prototyping.
          Passionate about transforming design concepts into functional,
          cross-device compatible websites.
        </p>
        <button className={styles.resumeBtn}>
          <a href="">Download Resume</a>
        </button>
      </div>
      <div className={styles.imgFD}>
        <img
          src="https://amiralirashidi.github.io/assets/images/front-end-developer.png"
          alt=""
        />
      </div>
    </div>
  );
}
