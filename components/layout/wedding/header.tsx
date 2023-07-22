import Link from "next/link";
import styles from "./header.module.scss";
import ServiceLogo from "/public/logo.svg";

export default function header() {
  // @ts-ignore
  return (
    <header className={styles.bar}>
      <div className={styles.bar_list}>
        <div className={`${styles.bar_item} ${styles.bar_title}`}>
          <Link href="/client" className={styles.bar_logo_link}>
            <ServiceLogo />
          </Link>
        </div>
      </div>
    </header>
  );
}
