# Zolvaa

A clean landing page project ready to be uploaded to GitHub.

## Features

- Responsive layout
- Modern styling
- Simple JavaScript interactions
- GitHub Pages deployment configuration

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Upload to GitHub

1. Create a new repository on GitHub.
2. Push this project to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Deploy with GitHub Pages

This project includes a GitHub Actions workflow for Pages deployment.

1. Go to your repository on GitHub.
2. Open Settings > Pages.
3. Set Source to GitHub Actions.
4. Push the code to GitHub.

The workflow will deploy the site automatically.
