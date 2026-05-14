# WorldWise — React Cities Explorer

WorldWise is a compact React app (Vite) for exploring city data, viewing locations on a map, and browsing countries. It demonstrates component-driven UI, context-based state, custom hooks, and integration with geolocation.

**Key features**

- Browse a list of cities and countries.
- View city details and map position.
- Simple, component-based structure suitable for learning and small demos.

## Quick Start

Prerequisites: Node.js (v14+), npm or yarn.

Install dependencies:

```bash
npm install
# or
yarn
```

Run the dev server:

```bash
npm run dev
# or
yarn dev
```

Build for production:

```bash
npm run build
```

## Project Structure (high level)

- [index.html](index.html)
- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [data/cities.json](data/cities.json)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [src/components/Map.jsx](src/components/Map.jsx)
- [src/contexts/CitiesContext.jsx](src/contexts/CitiesContext.jsx)
- [src/pages/Homepage.jsx](src/pages/Homepage.jsx)

## Where to look

- App entry and mounting: [src/main.jsx](src/main.jsx)
- App layout and routing: [src/pages/AppLayout.jsx](src/pages/AppLayout.jsx)
- City list and items: [src/components/CityList.jsx](src/components/CityList.jsx) and [src/components/CityItem.jsx](src/components/CityItem.jsx)
- Map integration: [src/components/Map.jsx](src/components/Map.jsx)
- Context/state: [src/contexts/CitiesContext.jsx](src/contexts/CitiesContext.jsx)

## Notes for contributors

- This project uses CSS modules for component styles in `src/components` and `src/pages`.
- City data is stored in `data/cities.json` — you can extend or replace it with your own dataset.

If you'd like, I can also:

- Add a quick demo screenshot or GIF.
- Add CI instructions or a GitHub Pages/Vercel deployment guide.

---

Created for learning and demo purposes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
