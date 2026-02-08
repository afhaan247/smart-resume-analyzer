import styles from "../styles/Home.module.css";

function AnalyzeButton({ onClick, disabled }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      Analyze Resume
    </button>
  );
}

export default AnalyzeButton;
