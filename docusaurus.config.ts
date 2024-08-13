import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MPI/MPI* La Martinière Monplaisir',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mpi-lamartin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mpi-lamartin', // Usually your GitHub org/user name.
  projectName: 'mpi-lamartin.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mpi-lamartin/mpi-lamartin.github.io',
        },
        blog: {
          blogSidebarTitle: 'Actualités',
          showReadingTime: false,
          routeBasePath: '/',
          blogTitle: 'Actualités',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MPI/MPI* La Martinière Monplaisir',
      logo: {
        alt: 'MPI/MPI* La Martinière Monplaisir',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.google.com',
          label: 'Emploi du temps',
          position: 'left',
        },
        {
          href: 'https://www.google.com',
          label: 'Planning',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/', label: 'Actualités', position: 'right'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
