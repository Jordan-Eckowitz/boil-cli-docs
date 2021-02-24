module.exports = {
  title: "Boil CLI", // Title for your website.
  tagline: "Boilerplate template manager and generator",
  url: "https://Jordan-Eckowitz.github.io", // For GitHub pages it is: "https://username.github.io"
  baseUrl: "/boil-cli-docs/", // For GitHub pages it follows the format: "/projectName/"
  projectName: "boil-cli-docs", // The name of the GitHub repository for your project
  organizationName: "Jordan-Eckowitz", // The GitHub user that owns the repository

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/boil-logo.ico",

  themeConfig: {
    navbar: {
      title: "Boil CLI",
      logo: {
        alt: "BOIL",
        src: "img/boil-logo.svg",
      },
      items: [
        {
          href: "https://github.com/Jordan-Eckowitz/boil-cli",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Jordan Eckowitz`,
    },
    googleAnalytics: {
      trackingID: "UA-129291776-2",
      anonymizeIP: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
