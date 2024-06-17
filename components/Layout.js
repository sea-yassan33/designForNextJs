import Head from "next/head";
import styles from "./layout.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Design For Next.js";

function Layout({children }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico"/>
                <title>{siteTitle}</title>
            </Head>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;