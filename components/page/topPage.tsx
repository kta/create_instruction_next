import ServiceLogo from "/public/logo.svg";
import styles from "./TopPage.module.scss";

export default function TopPage() {
  return (
    <div>
      <div className={styles.head}>
        <ServiceLogo />
      </div>
      <div className=""></div>
      <div className="service-details"></div>
      <div className="user-story"></div>
      <div className="foot"></div>
    </div>
  );
}
