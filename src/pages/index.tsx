import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className={clsx("hero", styles.heroBanner)}>
      <header>
        <h1>Wotes</h1>
        <h2>Wotes: Concise notes, clear explanations.</h2>
      </header>
      <Link className="button button--secondary button--lg" to="/docs/intro">
        Getting Started!
      </Link>
    </main>
  );
}
