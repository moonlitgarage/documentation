import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const TITLE = "Moonlit Garage - Documentation";
const ICON = "https://moonlitgarage.com/icon.svg";
const GITHUB_URL = "https://github.com/moonlitgarage"
const INSTA_URL = "https://instagram.com/moonlitgarageinc";
const TWITTER_URL = "https://twitter.com/moonlitgarage";
const EDIT_URL = GITHUB_URL + "/documentation/tree/main/packages/create-docusaurus/templates/shared/";

const config: Config = {
  title: TITLE,
  tagline: 'The Dev Stack for Drones',
  favicon: ICON,

  // Set the production url of your site here
  url: 'https://docs.moonlitgarage.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: EDIT_URL,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: EDIT_URL,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Moonlit Garage',
      logo: {
        alt: 'Moonlit Garage Logo',
        src: ICON,
      },
      items: [
        {
          to: '/docs/category/aeronode',
          label: 'AeroNode',
          position: 'left',
        },
        {
          href: GITHUB_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Github',
              href: GITHUB_URL,
            },
            {
              label: 'Instagram',
              href: INSTA_URL,
            },
            {
              label: 'Twitter',
              href: TWITTER_URL,
            },
          ],
        }
      ],
      copyright: `&copy; ${new Date().getFullYear()} Moonlit Garage Incorporated. All rights reserved. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
