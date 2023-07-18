import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type ContextProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ContextProps) {
  return (
    <>
      <Head>
        <title>ANDPAD</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
}
