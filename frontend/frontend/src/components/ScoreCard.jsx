import styles from "../styles/ScoreCard.module.css";

function ScoreCard({ score }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>Matching Score</p>

      <div className={styles.barContainer}>
        <div
          className={styles.barFill}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className={styles.scoreText}>{score}% Match</p>

<p className={styles.hint}>
  {score >= 75 && "Excellent match"}
  {score >= 50 && score < 75 && "Good match"}
  {score < 50 && "Needs improvement"}
</p>

    </div>
  );
}

export default ScoreCard;
