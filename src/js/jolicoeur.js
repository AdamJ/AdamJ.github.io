/*!
 * Adam J. Jolicoeur https://www.adamjolicoeur.com | v0.0.0
 * Copyright 2008-2024 | Adam J. Jolicoeur
 * Licensed under Apache-2.0 | (https://github.com/adamj/adamj.github.io/blob/main/LICENSE)
 */
function theme(color) {
  ui("theme", color || "#f9bd49");
}

const mode = () => {
  let newMode = ui("mode") == "dark" ? "light" : "dark";
  ui("mode", newMode);
}

window.addEventListener("DOMContentLoaded", () => theme());
