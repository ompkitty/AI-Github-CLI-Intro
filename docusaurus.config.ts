import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Git, GitHub CLI & KI-Agenten',
  tagline: 'Vom ersten Commit bis zur automatisierten Zusammenarbeit mit GitHub.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL for GitHub Pages (project pages).
  url: 'https://ompkitty.github.io',
  // Served under /<repo>/ for project pages.
  baseUrl: '/AI-Github-CLI-Intro/',

  // GitHub pages deployment config.
  organizationName: 'ompkitty',
  projectName: 'AI-Github-CLI-Intro',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ompkitty/AI-Github-CLI-Intro/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Git · gh · Agents',
      logo: {
        alt: 'Git, GitHub CLI und KI-Agenten',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          to: '/docs/introduction/what-is-git',
          label: 'Einstieg',
          position: 'left',
        },
        {
          to: '/docs/reference/gh-cheatsheet',
          label: 'Referenz',
          position: 'left',
        },
        {
          href: 'https://github.com/ompkitty/AI-Github-CLI-Intro',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Einstieg',
          items: [
            {
              label: 'Was ist Git?',
              to: '/docs/introduction/what-is-git',
            },
            {
              label: 'Was ist die GitHub CLI?',
              to: '/docs/introduction/what-is-github-cli',
            },
            {
              label: 'Warum KI-Agenten?',
              to: '/docs/introduction/why-ai-agents',
            },
          ],
        },
        {
          title: 'Schwerpunkte',
          items: [
            {
              label: 'Git-Grundlagen',
              to: '/docs/git/repository-basics',
            },
            {
              label: 'GitHub CLI',
              to: '/docs/github-cli/authentication',
            },
            {
              label: 'KI-Agenten',
              to: '/docs/ai-agents/operating-model',
            },
            {
              label: 'Automatisierung',
              to: '/docs/automation/github-actions',
            },
          ],
        },
        {
          title: 'Referenz',
          items: [
            {
              label: 'Git-Cheatsheet',
              to: '/docs/reference/git-cheatsheet',
            },
            {
              label: 'gh-Cheatsheet',
              to: '/docs/reference/gh-cheatsheet',
            },
            {
              label: 'Glossar',
              to: '/docs/reference/glossary',
            },
          ],
        },
        {
          title: 'Quellen',
          items: [
            {
              label: 'Git-Dokumentation',
              href: 'https://git-scm.com/docs',
            },
            {
              label: 'GitHub CLI Manual',
              href: 'https://cli.github.com/manual/',
            },
            {
              label: 'GitHub Docs',
              href: 'https://docs.github.com/',
            },
            {
              label: 'Repository',
              href: 'https://github.com/ompkitty/AI-Github-CLI-Intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Git, GitHub CLI & KI-Agenten. Gebaut mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
