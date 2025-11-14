// integration.test.js
/**
 * Simple integration test using supertest against running backend.
 * Run with:
 *   NODE_ENV=test BACKEND_URL=http://localhost:5000 npx jest module-4-integration/tests/integration.test.js
 *
 * Note: supertest requires the server app object to be importable, which
 * isn't always the case for external servers. This test tries HTTP fetch.
 */

const fetch = require("node-fetch");

const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

describe("CampusEase Integration Smoke Tests", () => {
  jest.setTimeout(10000);

  test("GET /api/flats returns 200 and JSON array", async () => {
    const res = await fetch(`${BACKEND}/api/flats`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  test("GET /api/tiffins returns 200 and JSON array", async () => {
    const res = await fetch(`${BACKEND}/api/tiffins`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  test("GET /api/rentals returns 200 and JSON array", async () => {
    const res = await fetch(`${BACKEND}/api/rentals`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
  });
});
