// Old case study URLs that moved under /portfolio/.
// Each entry generates a static redirect page (meta refresh plus canonical link).
const moved = {
  designs: ["alm", "component-library", "customer-engagement", "dashboard-analytics", "task-it"],
  development: ["archparser", "timetracker"],
  "case-studies": ["soccertracker", "color-picker"]
};

module.exports = Object.entries(moved).flatMap(([dir, slugs]) =>
  slugs.map((slug) => ({
    from: `/${dir}/${slug}/`,
    to: `/portfolio/${slug}/`
  }))
);
