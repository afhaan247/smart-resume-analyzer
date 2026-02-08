import styles from "../styles/UploadBox.module.css";

function UploadBox({ onFileSelect }) {
  const handleChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <label className={styles.box}>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleChange}
      />
      <p>Click to upload PDF resume</p>
      <span>Only PDF files are supported</span>
    </label>
  );
}

export default UploadBox;
