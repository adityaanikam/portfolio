# Portfolio

Personal portfolio of Aditya Nikam: https://adityanikam.me/

A single-page React site with an animated project deck, an experience panel, and a skills grid. Project and skill content lives in two JSON files, so adding a project does not touch any component.

## Stack

React 19, Vite, Tailwind CSS 4, Motion, React Router.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` creates the production build in `dist/`.

## Updating content

- `src/Constant/ProjectsData.json`: projects grouped by category. A project without `imageSrc` shows a tech-stack tile instead of a screenshot. Screenshots go in `public/projectThumbnails/`.
- `src/Constant/Skills.json`: skill groups shown on the home grid.
- `src/pages/HomePage.jsx`: the experience panel and the open-source highlights.
