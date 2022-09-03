module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    BACKEND_URL_S: "http://localhost:8080",
    BUSINESS_URL: "https://www.biz.theproductindex.io",
  },
  devIndicators: {
    buildActivity: false
}
};
