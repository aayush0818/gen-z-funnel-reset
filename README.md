# The Crowd Effect

An editorial, social-media-centered exploration of the bandwagon effect,
adapted from the imported Vogue Business × Archrival reference while retaining
its visual design system.

The page features an interactive like-count comparison with a personal result,
a context-reveal story, a photo-changing illustrative trend model with a clear
end state, and research charts and study summaries.
Research references and the visual-asset register live in `src/lib/crowd-data.ts`.
Pexels photographs are bundled locally, credited on the page and listed with
their license details in the register.

Design reference: https://www.genzbrokethefunnelwhatnow.com/

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b9f850b0-9d63-4765-ad4e-ca92a1f97bd2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy on Vercel

The app is configured with Nitro's Vercel preset. No `vercel.json` or custom output directory is
needed.

1. Commit and push the changes to the GitHub repository.
2. In Vercel, choose **Add New → Project** and import `aayush0818/gen-z-funnel-reset`.
3. Keep the repository root as the project root. If Vercel asks for a framework preset, choose
   **Other**. Leave the install command on **Auto**, set the build command to `npm run build`, and
   leave **Output Directory** unset so Nitro can provide `.vercel/output`.
4. Choose **Deploy**. Vercel will give you a `*.vercel.app` URL; add a custom domain later in the
   project's **Settings → Domains**.

After connecting Git, pushes to the production branch deploy the live site; pushes to other
branches create preview deployments. See [Vercel's Git deployment guide](https://vercel.com/docs/git)
and [Nitro's Vercel provider guide](https://nitro.build/deploy/providers/vercel).
