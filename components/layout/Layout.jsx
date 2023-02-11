import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>Foods</Link>
        </div>
        <div className={styles.menu}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categories</Link>
        </div>
      </header>

      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/erfangh-80"
          target="_blank"
          rel="noreferrer"
        >My Github </a>
        next.js project | used ssg, ssr, pre-rendering
      </footer>
    </>
  );
};

export default Layout;
