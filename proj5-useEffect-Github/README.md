# GitHub User Finder

A real-time GitHub profile lookup built to teach **`useEffect`** — how and when React runs side effects, and how to fetch data from an external API in response to state changes.

## What This Teaches

- What `useEffect` is and why it exists
- Fetching data from a real API (GitHub REST API)
- Dependency array — re-running effects when state changes
- Cleanup functions — preventing stale data with the `ignore` flag
- Handling loading and error states gracefully

## Key Concept — The `ignore` Flag

This project uses a subtle but important pattern:

```js
useEffect(() => {
  let ignore = false;
  fetchUser().then(data => {
    if (!ignore) setUser(data); // only update if still relevant
  });
  return () => { ignore = true }; // cleanup on unmount or re-run
}, [username]);
```

This prevents a race condition where a slow response from an old request overwrites a faster response from a newer one.

## Tech Stack

- **React 18**
- **Vite**
- **GitHub REST API**

## Getting Started

```bash
npm install
npm run dev
```

## Author

**Akshat Tomar**
