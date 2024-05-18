// setupProxy.js
import { createProxyMiddleware } from "proxy-middleware";

export default function (app) {
  app.use(
    createProxyMiddleware("/users", {
      target: "https://api.clinicaltrialskorea.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/v1", // API 엔드포인트 경로 재작성
      },
    })
  );

  //   app.use(
  //     createProxyMiddleware("/api/breeds", {
  //       target: "https://dog.ceo",
  //       changeOrigin: true,
  //     })
  //   );

  //   app.use(
  //     createProxyMiddleware("/trends/trendingsearches", {
  //       target: "https://trends.google.co.kr",
  //       changeOrigin: true,
  //     })
  //   );
}
