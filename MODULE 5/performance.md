# Performance checklist

- Use indexes on frequently queried fields:
  - `User.email` (unique)
  - `Flat.location`, `Flat.price`
  - Text index for listing search
- Pagination: use `limit` + `skip` or cursor-based paging
- Optimize images: serve compressed images, use CDN in production
- Cache common queries (Redis) for high-traffic endpoints
- Monitor slow queries using MongoDB profiler or Atlas Performance Advisor
- Keep small response payloads (avoid returning heavy arrays if not needed)
