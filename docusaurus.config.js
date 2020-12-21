module.exports = {
  title: 'Watchy',
  tagline: 'Open Source E-Paper Watch',
  url: 'https://watchy.sqfmi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sqfmi', // Usually your GitHub org/user name.
  projectName: 'watchy-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Watchy',
      logo: {
        alt: 'Watchy by SQFMI',
        src: 'img/sqfmi_logo_32x32.svg',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'watchfaces/',
          activeBasePath: 'watchfaces',
          label: 'Watch Faces',
          position: 'left',
        },
        {
          to: 'watchcases/',
          activeBasePath: 'watchcases',
          label: 'Watch Cases',
          position: 'left',
        },                 
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.tindie.com/products/sqfmi/watchy/',
          label: 'Buy Watchy!',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            // {
            //   label: 'Hardware',
            //   to: 'docs/hardware',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/sqfmi/',
            },                        
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/sqfmi',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/sqfmi',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC9SAc8ikvU7KuYw3OfogFFA',
            },
          ],
        },
        {
          title: 'Shop',
          items: [
            {
              label: 'Tindie',
              href: 'https://www.tindie.com/stores/squarofumi/',
            },
            {
              label: 'BOOTH',
              href: 'https://sqfmi.booth.pm/',
            },
          ],
        },        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a class="footer__link-item" href="https://www.sqfmi.com"> Squarofumi</a>. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sqfmi/watchy-site',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
