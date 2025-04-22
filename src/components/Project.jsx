import styles from "./Project.module.css";
import { forwardRef } from "react";

const Project = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.project}>
      <h2>Project</h2>
      <div className={styles.projectCompo}>
        <div className={styles.projectInfo}>
          <h2>mausammood</h2>
          <div className={styles.info}>
            I developed a weather web app for weather information. The app is
            named 'Mausam Mood'. This app displays the current temperature in
            °C, the humidity in %, and the wind speed in km/h.
          </div>
          <div className={styles.projectLink}>
            <button>
              <a href="https://github.com/AftabAttar/Weather-/tree/main/src">
                Project Code
              </a>
            </button>

            <button>
              <a href="https://mausammood.netlify.app/">Open Project</a>
            </button>
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h2>todoinfo</h2>
          <div className={styles.info}>
            Developed a Todo web app named TodoInfo. This TodoInfo web app is
            used to add your day-to-day tasks. You can add tasks, and delete
            tasks if completed. After you complete a task and click on the
            task's name, it shows your completed task count at the bottom.
          </div>
          <div className={styles.projectLink}>
            <button>
              <a href="https://github.com/AftabAttar/TodoApp/tree/main/src">
                Project Code
              </a>
            </button>

            <button>
              <a href="https://todoinfo.netlify.app/">Open Project</a>
            </button>
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h2>myinfoform</h2>
          <div className={styles.info}>
            Developed a Form Web App. The name of the Form Web App is
            'myinfoform'.
          </div>
          <div className={styles.projectLink}>
            <button>
              <a href="https://github.com/AftabAttar/Form/tree/main/src">
                Project Code
              </a>
            </button>

            <button>
              <a href="https://myinfoform.netlify.app/">Open Project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
