/**
 * Simple backend smoke tests using node-fetch.
 * Run with node: `node module-5-testing-deployment/tests/backend/api-smoke.test.js`
 *
 * Ensure your backend is running at BACKEND (default http://localhost:5000).
 */

const fetch = require("node-fetch");

const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

(async () => {
  try {
    const endpoints = ["/api/flats", "/api/tiffins", "/api/rentals"];
    for (const ep of endpoints) {
      const url = `${BACKEND}${ep}`;
      const res = await fetch(url);
      console.log(`${ep} → ${res.status}`);
      if (res.status !== 200) {
        console.error(`❌ Smoke test failed for ${ep} (status ${res.status})`);
        process.exit(1);
      }
    }
    console.log("✅ All backend smoke tests passed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Smoke tests error:", err);
    process.exit(1);
  }
})();
