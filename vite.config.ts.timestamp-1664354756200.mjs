// vite.config.ts
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\smg20\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\pwa";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@common": path.resolve(__vite_injected_original_dirname, "./src/components/common"),
      "@icon": path.resolve(__vite_injected_original_dirname, "./src/comonents/icon"),
      "@IndexPage": path.resolve(__vite_injected_original_dirname, "./src/components/IndexPage"),
      "@layout": path.resolve(__vite_injected_original_dirname, "./src/components/layout"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
      "@type": path.resolve(__vite_injected_original_dirname, "./src/types"),
      "@data": path.resolve(__vite_injected_original_dirname, "./src/data")
    }
  },
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      },
      includeAssets: [
        "icon-48x48.png",
        "icon-72x72.png",
        "icon-96x96.png",
        "icon-128x128.png",
        "icon-144x144.png",
        "icon-152x152.png",
        "icon-192x192.png",
        "icon-384x384.png",
        "icon-512x512.png",
        "apple-touch-icon.png"
      ],
      manifest: {
        name: "\uC601\uC9C4\uAE00\uB85C\uBC8C\uAE30\uC219\uC0AC",
        short_name: "\uAE00\uB85C\uBC8C\uAE30\uC219\uC0AC",
        description: "\uC601\uC9C4\uC804\uBB38\uB300\uD559 \uAE00\uB85C\uBC8C\uAE30\uC219\uC0AC\uC758 \uC7A5\uBD80\uB97C ICT\uB97C \uD1B5\uD574 \uB514\uC9C0\uD138\uD654\uB97C \uC2DC\uD0A8 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "icons/icon-196x196.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/apple-touch-icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzbWcyMFxcXFxPbmVEcml2ZVxcXFxcdUJDMTRcdUQwRDUgXHVENjU0XHVCQTc0XFxcXHB3YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc21nMjBcXFxcT25lRHJpdmVcXFxcXHVCQzE0XHVEMEQ1IFx1RDY1NFx1QkE3NFxcXFxwd2FcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3NtZzIwL09uZURyaXZlLyVFQiVCMCU5NCVFRCU4MyU5NSUyMCVFRCU5OSU5NCVFQiVBOSVCNC9wd2Evdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGNvbW1vblwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbXBvbmVudHMvY29tbW9uXCIpLFxuICAgICAgXCJAaWNvblwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbW9uZW50cy9pY29uXCIpLFxuICAgICAgXCJASW5kZXhQYWdlXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50cy9JbmRleFBhZ2VcIiksXG4gICAgICBcIkBsYXlvdXRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzL2xheW91dFwiKSxcbiAgICAgIFwiQGhvb2tzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvaG9va3NcIiksXG4gICAgICBcIkB1dGlsc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3V0aWxzXCIpLFxuICAgICAgXCJAdHlwZVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3R5cGVzXCIpLFxuICAgICAgXCJAZGF0YVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2RhdGFcIiksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXCIqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Z31cIl0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZUFzc2V0czogW1xuICAgICAgICBcImljb24tNDh4NDgucG5nXCIsXG4gICAgICAgIFwiaWNvbi03Mng3Mi5wbmdcIixcbiAgICAgICAgXCJpY29uLTk2eDk2LnBuZ1wiLFxuICAgICAgICBcImljb24tMTI4eDEyOC5wbmdcIixcbiAgICAgICAgXCJpY29uLTE0NHgxNDQucG5nXCIsXG4gICAgICAgIFwiaWNvbi0xNTJ4MTUyLnBuZ1wiLFxuICAgICAgICBcImljb24tMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgXCJpY29uLTM4NHgzODQucG5nXCIsXG4gICAgICAgIFwiaWNvbi01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsXG4gICAgICBdLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogXCJcdUM2MDFcdUM5QzRcdUFFMDBcdUI4NUNcdUJDOENcdUFFMzBcdUMyMTlcdUMwQUNcIixcbiAgICAgICAgc2hvcnRfbmFtZTogXCJcdUFFMDBcdUI4NUNcdUJDOENcdUFFMzBcdUMyMTlcdUMwQUNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJcdUM2MDFcdUM5QzRcdUM4MDRcdUJCMzhcdUIzMDBcdUQ1NTkgXHVBRTAwXHVCODVDXHVCQzhDXHVBRTMwXHVDMjE5XHVDMEFDXHVDNzU4IFx1QzdBNVx1QkQ4MFx1Qjk3QyBJQ1RcdUI5N0MgXHVEMUI1XHVENTc0IFx1QjUxNFx1QzlDMFx1RDEzOFx1RDY1NFx1Qjk3QyBcdUMyRENcdUQwQTggXHVENTA0XHVCODVDXHVBREY4XHVCN0E4XHVDNzg1XHVCMkM4XHVCMkU0LlwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb25zL2ljb24tNDh4NDgucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0OHg0OFwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpY29ucy9pY29uLTcyeDcyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaWNvbnMvaWNvbi05Nng5Ni5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjk2eDk2XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb25zL2ljb24tMTI4eDEyOC5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjEyOHgxMjhcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaWNvbnMvaWNvbi0xNDR4MTQ0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTQ0eDE0NFwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpY29ucy9pY29uLTE1MngxNTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNTJ4MTUyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb25zL2ljb24tMTk2eDE5Ni5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5NngxOTZcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcImFueSBtYXNrYWJsZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTZ4MTk2XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpY29ucy9pY29uLTM4NHgzODQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzODR4Mzg0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb25zL2ljb24tNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVUsU0FBUyxvQkFBb0I7QUFDaFcsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsV0FBVyxLQUFLLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsTUFDNUQsU0FBUyxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsTUFDdkQsY0FBYyxLQUFLLFFBQVEsa0NBQVcsNEJBQTRCO0FBQUEsTUFDbEUsV0FBVyxLQUFLLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsTUFDNUQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUMvQyxTQUFTLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDOUMsU0FBUyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNQLGNBQWMsQ0FBQyxnQ0FBZ0M7QUFBQSxNQUNqRDtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUNFO0FBQUEsUUFDRixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
