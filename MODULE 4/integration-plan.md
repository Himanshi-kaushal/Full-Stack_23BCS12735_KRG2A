# Integration Plan — CampusEase

## Goals
- Demonstrate end-to-end integration between React frontend and Node/Express backend.
- Provide reusable API clients and examples for fetching/displaying flats, tiffins, and rentals.
- Provide Postman & automated tests for manual & CI verification.

## Steps
1. Configure backend and ensure CORS allows frontend origin (http://localhost:3000).
2. Use `api-client/axiosClient.js` to create a centralized axios instance.
3. Use modular wrappers (`flatsApi.js`, `tiffinApi.js`, `rentalApi.js`) for endpoints.
4. Use `frontend-examples/useFetchFlats.js` hook in React pages/components.
5. Run manual checks with Postman collection.
6. Run automated integration tests with Jest + Supertest (ensure backend running).

## Endpoints used (examples)
- `GET /api/flats` — list flats (supports ?location=&minPrice=&maxPrice=)
- `GET /api/flats/:id` — get flat details
- `POST /api/flats` — create flat
- `GET /api/tiffins`, `POST /api/tiffins`
- `GET /api/rentals`, `POST /api/rentals`

## Error handling & retries
- Axios instance includes simple retry/backoff hook in client (see axiosClient.js).
- All client calls return `{ success, data, error }` shaped response for easy UI handling.

## Security
- Use HTTPS and JWT for auth in production (not included in this demo).
- Sanitize server responses and never send passwordHash to frontend.
