import styles from "./Footer.module.scss";

export default function Footer() {
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
