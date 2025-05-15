import styles from "./About.module.css";

export default function About() {
  const resumeUrl =
    "https://drive.google.com/file/d/1yV8qzrtDwjLzKNfYdCPo8uyXBzOOEbjT/view?usp=sharing";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Aftab_Attar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <button className={styles.resumeBtn} onClick={handleDownload}>
          Download Resume
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
