const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy requests to /api to http://localhost:5001
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://localhost:5001",
    })
  );

  // Proxy requests to /auth/google to http://localhost:5001
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "http://localhost:5001",
    })
  );
};
