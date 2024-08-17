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
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
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
          //// editUrl:
          ////  'https://github.com/mpi-lamartin/mpi-lamartin.github.io',
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
      title: 'MPI/MPI* La Martin',
      logo: {
        alt: 'MPI/MPI* La Martinière Monplaisir',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   label: 'Organisation',
        //   position: 'left',
        //   type: 'dropdown',
        //   items: [
        //     {
        //       label: 'Emploi du temps',
        //       href: '/docs/organisation/edt.pdf',
        //     },
        //     {
        //       label: 'Planning',
        //       href: 'https://www.facebook.com',
        //     },
        //   ],
        // },
        {
          type: 'doc',
          docId: 'orga/doc1',
          position: 'left',
          label: 'Organisation',
          sidebarId: "orga",
        },
        {
          type: 'doc',
         // docId: 'math/intro',
	 docId: 'math/doc1',
          position: 'left',
          label: 'Mathématiques',
          sidebarId: "math",
        },
        {
          href: 'https://cahier-de-prepa.fr',
          position: 'left',
          label: 'Physique',
          sidebarId: "physique",
        },
        {
          href: 'https://fortierq.github.io/mpi-info',
          label: 'Informatique',
          position: 'left',
          sidebarId: "info",
        },
        // {to: '/', label: 'Actualités', position: 'right'},
        {
          href: 'https://github.com',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://prepas.org/index.php?entree=etudiants',
          label: 'prepas.org',
          position: 'right',
        },
        {
          href: 'https://www.scei-concours.fr',
          label: 'SCEI',
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
