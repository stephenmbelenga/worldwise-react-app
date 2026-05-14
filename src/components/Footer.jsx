import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} WorldWise Inc.
      </h3>
    </footer>
  );
}

export default Footer;
