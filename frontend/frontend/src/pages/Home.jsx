import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadBox from "../components/UploadBox";
import { analyzeResume } from "../services/api";
import styles from "../styles/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
  if (!file) {
    setError("Please upload your resume");
    return;
  }

  if (!jobDescription.trim()) {
    setError("Please paste the job description");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const result = await analyzeResume(file, jobDescription);
    navigate("/result", { state: result });

  } catch (err) {
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={styles.page}>
      <div className={styles.splitContainer}>
        {/* LEFT PANEL */}
        <div className={styles.leftPanel}>
          <h1 className={styles.title}>Smart Resume Analyzer</h1>
          <p className={styles.subtitle}>
            Upload your resume and compare it with a job description
          </p>

          <UploadBox onFileSelect={setFile} />

          {file && (
            <p className={styles.selected}>
              Selected: {file.name}
            </p>
          )}

          <textarea
            className={styles.textarea}
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.button}
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* RIGHT PANEL (kept empty for now) */}
        <div className={styles.rightPanel}></div>
      </div>
    </div>
  );
}

export default Home;
