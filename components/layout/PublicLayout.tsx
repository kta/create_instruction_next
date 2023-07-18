import Head from "next/head";
import styles from "./PublicLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>create_instruction</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="index,follow" />
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  );
}
