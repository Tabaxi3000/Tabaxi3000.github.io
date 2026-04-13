# Personal site (GitHub Pages)

Static portfolio for **Caleb Choe**: HTML, CSS, and JavaScript. Content is derived from the resume in this folder.

## Host on GitHub Pages

1. Create a new repository on GitHub (e.g. `calebchoe.github.io` for a user site, or any name for a project site).
2. Push this folder’s contents to the default branch (`main`).
3. In the repo on GitHub: **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **`main`**, folder **`/ (root)`**, then save.

Your site will be available at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a `username.github.io` repository).

## LinkedIn and GitHub URLs

Profile links live in [`js/config.js`](js/config.js); update there if they change.

## Local preview

Open `index.html` in a browser, or from this directory run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
