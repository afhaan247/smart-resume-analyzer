import { useLocation, useNavigate } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import SkillList from "../components/SkillList";
import styles from "../styles/Result.module.css";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  // Data coming from backend via navigation state
  const {
    matchScore = 0,
    matchedSkills = [],
    missingSkills = [],
  } = location.state || {};

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resume Match Result</h2>

        <ScoreCard score={matchScore} />

        <div className={styles.grid}>
          <SkillList
            title="Matched Skills"
            items={matchedSkills}
            type="matched"
          />
          <SkillList
            title="Missing Skills"
            items={missingSkills}
            type="missing"
          />
        </div>

        <button
          className={styles.backButton}
          onClick={() => navigate("/")}
        >
          Analyze Another Resume
        </button>
      </div>
    </div>
  );
}

export default Result;
