import "../styles/globals.css";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>De Faria Dev</title>
        <link rel="icon" type="image/jpg" href="/seo.png" />
      </Head>
      <Layout locale={router.locale}>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} locale={router.locale} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
