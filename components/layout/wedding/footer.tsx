import styles from "./footer.module.scss";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={"/images/footer_logo.png"} className={styles.logo} />
      </div>
      <div>
        <small className={styles.copy}>Powered by Ideal Service</small>
      </div>
    </footer>
  );
}
