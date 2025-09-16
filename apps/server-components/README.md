# @np/server-components

## Goal
Understand the difference between **Server Components** and **Client Components** in Next.js.  

## Learning Tasks
- [x] Render a Server Component with dynamic data (timestamp).  
- [x] Render a Client Component with interactive state (button).  
- [ ] Add a Server Action that mutates data on the server.  
- [ ] Stream part of the page (use `Suspense`) and observe loading behavior.  
- [ ] Fetch data from an API inside a Server Component.  

## Commands
- `pnpm dev` – start this example  
- `pnpm build` – build for production  
- `pnpm start` – run the production server  
- `pnpm lint` – run linter  

## Files to Check
- `/app/layout.tsx` — root layout wrapping the page  
- `/app/page.tsx` — main page, combines server + client components  
- `/app/server-message.tsx` — pure Server Component  
- `/app/client-button.tsx` — pure Client Component with hydration  

## Experiments to Try
- Refresh the page and note how the **timestamp updates** (server render).  
- Click the button and observe **client-side state updates** without reloading.  
- Convert `server-message.tsx` into a Client Component by adding `"use client"` at the top — what changes?  
- Try fetching from a public API inside `server-message.tsx` and see how the data loads.  
- Wrap `client-button.tsx` in `<Suspense>` and add an artificial delay to observe streaming.  

---
