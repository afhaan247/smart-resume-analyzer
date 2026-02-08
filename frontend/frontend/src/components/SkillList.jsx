import styles from "../styles/SkillList.module.css";

function SkillList({ title, items, type }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.list}>
        {items.map((skill, index) => (
          <li
            key={index}
            className={
              type === "matched"
                ? styles.matched
                : styles.missing
            }
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
