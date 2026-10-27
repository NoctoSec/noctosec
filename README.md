# Nocto — Information Security

Static multilingual SPA (ES / EN / FR), CSR with Node.js and Webpack 5. Dark, light and system themes with green, blue and red accents.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Publish the contents of `dist/` to static hosting. No backend is required. Source maps are disabled with `devtool: false` and `css-loader` `sourceMap: false`.

## Contact

noctosecurity@gmail.com

## Pricing disclaimer

All USD monthly prices shown are illustrative starting estimates, not verified market quotes or binding offers. Confirm deliverables, billing units, number of assets, support hours, minimum charges, tax and any third-party licenses before publishing as commercial commitments. External intelligence work is limited to lawful, authorized and public-source collection.

## GitHub Pages automatic deployment

The repository includes `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository and push **the contents of this folder** to its `main` branch (the `package.json` must be at repository root).
2. In GitHub, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
3. Open **Actions** to watch the deployment. Every push to `main` triggers a build and deployment; you can also run it manually using **Run workflow**.
4. Your site will be served at `https://<username>.github.io/<repository>/` for a project repository, or `https://<username>.github.io/` for a matching user/organization Pages repository.

The Webpack output uses `publicPath: 'auto'`, so emitted JavaScript and CSS assets resolve correctly under a GitHub Pages repository subpath. The SPA uses hash navigation (`#/`), avoiding server-side route rewrites. Webpack `devtool: false` and CSS loader `sourceMap: false` remain enabled to prevent source-map generation. GitHub Pages serves static files only; Node.js runs exclusively during the build.
