// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Print',
  tagline: "Better Documentation for Bryan Johnsons' Blueprint",
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'facebook', // Change to your GitHub org/user name.
  projectName: 'docusaurus', // Change to your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Open Print',
      logo: {
        alt: 'Open Print Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro', // First doc as an entry point
          position: 'left',
          label: 'Bryan',
        },
        { to: '/', label: 'You', position: 'left' },
        // { to: '/docs/diet', label: 'Diet', position: 'left' },
        // { to: '/docs/measurements', label: 'Measurements', position: 'left' },
        // { to: '/docs/fitness', label: 'Fitness', position: 'left' },
        // { to: '/docs/sleep', label: 'Sleep', position: 'left' },
        { to: '/blog', label: 'Project Updates', position: 'right' },
        {
          href: 'https://github.com/elijahmurray/open-print',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            { label: 'Intro', to: '/docs/intro' },
            { label: 'Diet', to: '/docs/diet' },
            { label: 'Measurements', to: '/docs/measurements' },
            { label: 'Fitness', to: '/docs/fitness' },
            { label: 'Sleep', to: '/docs/sleep' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
