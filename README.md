# Proposal Wizard — WSP AI Client Acquisition Suite

Task 11: Build Proposal Wizard UI

A 5-step wizard for building a client proposal: Client Info → Scope →
Timeline → Requirements → Review & Generate. This is the UI shell — later
tasks (12–15) will plug in the scope generator, timeline generator,
requirement checker, and PDF export.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or similar
(same pattern as the Sift project).

## Project structure

```
src/
  App.jsx                 - wizard state, step routing, layout
  App.css                 - layout, cards, buttons, form fields
  index.css               - design tokens (colors, type, fonts)
  components/
    StepRail.jsx/.css     - the connected step-pipeline sidebar
    ClientInfoStep.jsx    - step 1
    ScopeStep.jsx         - step 2
    TimelineStep.jsx      - step 3
    RequirementsStep.jsx  - step 4
    ReviewStep.jsx        - step 5 + generate action
```

## Notes

- No backend yet — all state lives in React (`useState` in `App.jsx`).
- "Generate proposal" on the last step is currently a placeholder;
  PDF export hooks in once Task 15 is built.
- Design is dark navy with a blue→purple accent gradient, matching the
  WSP Console dashboard's existing visual language.
