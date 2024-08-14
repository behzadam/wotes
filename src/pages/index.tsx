import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  return (
    <main className="grid w-full min-h-screen place-content-center">
      <header className="text-center">
        <h1 className="font-jakarta">WOTES</h1>
        <h2 className="text-lg font-mono font-light dark:text-neutral-400">
          My personal notes on advanced web development concepts.
        </h2>
      </header>
      <Link
        className="text-center block p-4 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 hover:no-underline hover:text-white transition-colors duration-200"
        to="/docs/network/web-socket"
      >
        Getting Started!
      </Link>
    </main>
  );
}
