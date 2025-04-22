import styles from "./Jobs.module.css";
import { FaSearch } from "react-icons/fa";
import { forwardRef } from "react";

const Jobs = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.jobs}>
      <h2>Jobs</h2>
      <div className={styles.jobInfo}>
        <FaSearch className={styles.searchIcon} />
      </div>
    </div>
  );
});

export default Jobs;
