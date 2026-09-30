import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="mono-kicker">Git · GitHub CLI · KI-Agenten</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/what-is-git">
            Einstieg lesen
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginLeft: '0.75rem'}}
            to="/docs/reference/gh-cheatsheet">
            gh-Cheatsheet
          </Link>
        </div>
      </div>
    </header>
  );
}

type Track = {
  kicker: string;
  title: string;
  text: string;
  to: string;
  linkLabel: string;
};

const tracks: Track[] = [
  {
    kicker: '02 · GIT',
    title: 'Versionierung verstehen',
    text: 'Repository, Staging, Commits, Branches, Merge und Remotes – lokal, nachvollziehbar, ohne Magie.',
    to: '/docs/git/repository-basics',
    linkLabel: 'Git-Grundlagen öffnen',
  },
  {
    kicker: '03 · GITHUB CLI',
    title: 'GitHub aus dem Terminal',
    text: 'Issues, Pull Requests, Actions, Releases und API-Zugriff mit deterministischen gh-Befehlen.',
    to: '/docs/github-cli/authentication',
    linkLabel: 'gh-Workflows öffnen',
  },
  {
    kicker: '04 · KI-AGENTEN',
    title: 'Kontrolliert automatisieren',
    text: 'Observe → Plan → Change → Validate → Commit → PR → CI: Agenten als überprüfbare Operatoren.',
    to: '/docs/ai-agents/operating-model',
    linkLabel: 'Agentenmodell öffnen',
  },
];

function Tracks() {
  return (
    <section className="container" style={{padding: '2rem 1rem'}}>
      <div className="mono-grid">
        {tracks.map((track) => (
          <div key={track.kicker} className="mono-card">
            <span className="mono-kicker">{track.kicker}</span>
            <h3>{track.title}</h3>
            <p>{track.text}</p>
            <Link to={track.to}>{track.linkLabel} →</Link>
          </div>
        ))}
      </div>
      <div className="mono-terminal" aria-label="Agentenzyklus als Terminaldarstellung">
        <div><span className="prompt">$ </span>git status --short --branch</div>
        <div><span className="prompt">$ </span>gh repo view --json nameWithOwner,defaultBranchRef,url</div>
        <div><span className="prompt">$ </span>git diff --check &amp;&amp; npm run build</div>
        <div><span className="prompt">$ </span>gh pr create --fill</div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Git, GitHub CLI und KI-Agenten: vom ersten Commit bis zur automatisierten Zusammenarbeit mit GitHub.">
      <HomepageHeader />
      <main>
        <Tracks />
      </main>
    </Layout>
  );
}
