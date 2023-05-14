/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://foodsq.pl",
  generateRobotsTxt: true // (optional)
  // ...other options
};
