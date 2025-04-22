import styles from "./Navbar.module.css";
import { IoIosPersonAdd } from "react-icons/io";
import { SiSkillshare } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoCodeWorking } from "react-icons/io5";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Navbar({ scrollToSection, refs }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonComponents}>
        <div className={styles.infoButton}>
          <button onClick={() => scrollToSection(refs.aboutRef)}>
            <IoIosPersonAdd className={styles.icon} />
            <h3>About</h3>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button onClick={() => scrollToSection(refs.skillsRef)}>
            <SiSkillshare className={styles.icon} />
            <h3>Skills</h3>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button onClick={() => scrollToSection(refs.jobsRef)}>
            <BsPersonWorkspace className={styles.icon} />
            <h3>Jobs</h3>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button onClick={() => scrollToSection(refs.projectRef)}>
            <IoCodeWorking className={styles.icon} />
            <h3>Project</h3>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button onClick={() => scrollToSection(refs.educationRef)}>
            <MdOutlineAssuredWorkload className={styles.icon} />
            <h3>Educations</h3>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button>
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedinIn className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <h3>LinkedIn</h3>
            </a>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button>
            <a href="https://github.com/AftabAttar">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://github.com/AftabAttar">
              <h3>GitHub</h3>
            </a>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button>
            <a href="https://t.me/your_telegram_AftabAttar">
              <FaTelegramPlane className={styles.icon} />
            </a>
            <a href="https://t.me/your_telegram_AftabAttar">
              <h3>Telegram</h3>
            </a>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button>
            <a href="tel:+917304405253">
              <MdOutlineLocalPhone className={styles.icon} />
            </a>
            <a href="tel:+917304405253">
              <h3>Phone</h3>
            </a>
          </button>
        </div>

        <div className={styles.infoButton}>
          <button>
            <a href="mailto:your.aftabattar07@gmail.com">
              <MdEmail className={styles.icon} />
            </a>
            <a href="mailto:your.aftabattar07@gmail.com">
              <h3>Email</h3>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
