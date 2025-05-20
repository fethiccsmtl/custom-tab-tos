import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "override-tos",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.onPageChange((url) => {
        if (url === "/tos") {
          const container = document.querySelector("[itemprop='mainContentOfPage']");

          if (container) {
            container.innerHTML = settings.custom_tos_content;
          }
        }
      });
    });
  },
};