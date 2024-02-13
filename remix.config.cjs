/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the `VERCEL` and `VERCEL_URL` variables
  // or the `now` deploy target. They are only used in local development.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  //assetsBuildDirectory: "public/build",
  //PublicPath: "/build/",
  //appDirectory: "app",
  tailwind: true,
  };
