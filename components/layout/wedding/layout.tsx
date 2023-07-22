import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

type ContextProps = {
  children: React.ReactNode;
};

export default function layout({ children }: ContextProps) {
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
