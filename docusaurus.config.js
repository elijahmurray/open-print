// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenPrint',
  tagline: "Better Documentation for Bryan Johnson's Blueprint",
  favicon: 'img/favicon.ico',
  url: 'https://elijahmurray.com',
  baseUrl: '/open-print/',
  organizationName: 'elijahmurray', // Change to your GitHub org/user name.
  projectName: 'open-print', // Change to your repo name.
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
      title: 'OpenPrint',
      logo: {
        alt: 'Open Print Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'bryan/intro', // First doc as an entry point
          position: 'left',
          label: 'Bryan',
        },
        { to: 'docs/you/overview', label: 'You', position: 'left' },
        {
          type: 'doc',
          docId: 'Reference/overview', // First doc as an entry point
          position: 'left',
          label: 'Reference',
        },
        // { to: '/docs/diet', label: 'Diet', position: 'left' },
        // { to: '/docs/measurements', label: 'Measurements', position: 'left' },
        // { to: '/docs/fitness', label: 'Fitness', position: 'left' },
        // { to: '/docs/sleep', label: 'Sleep', position: 'left' },
        // { to: '/blog', label: 'OpenPrint Updates', position: 'right' },
        {
          href: 'https://elijahmurray.substack.com/',
          label: 'Get Updates',
          position: 'right',
        },
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
            { label: 'Blueprint', to: '/docs/bryan/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/blueprint_/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/elijahmurray/open-print',
            },
            {
              label: 'Support',
              href: 'https://elijahmurray.substack.com/'
            },
          ],
        },
      ],
      copyright: `Open source © ${new Date().getFullYear()} Elijah Murray.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
