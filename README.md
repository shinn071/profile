# Sharmaine M. Iglesia — Portfolio

A responsive, single-page portfolio for Sharmaine M. Iglesia, an Information
Technology student specializing in Network Design and Management. It is built
with Next.js App Router, React, and plain CSS, with no UI libraries or backend.

## Run locally

From the project folder, run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To make a fresh project before copying these files into it, use:

```bash
npx create-next-app@latest sharmaine-portfolio --js --app --no-tailwind --no-src-dir --use-npm
cd sharmaine-portfolio
npm run dev
```

When the setup asks about using a `src/` directory, choose **No**. Keep the
default Next.js, React, and React DOM dependencies. Copy this portfolio's
`app/`, `components/`, `data/`, and `public/` folders and its root configuration
files into the new project, replacing the generated files.

Sharmaine's supplied portrait is already in `public/images/sharmaine.jpg` and
is under 500 KB. The supplied NVSU logo is in `public/images/nvsu-cit-logo.png`.

## Upload to GitHub

1. Create a new, empty repository on [GitHub](https://github.com/new). Do not
   initialize it with a README or other files.
2. In a terminal opened in this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Add Sharmaine's portfolio"
   ```

3. Copy the repository's HTTPS URL from GitHub, then connect and upload:

   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

   Replace the example URL with the URL for your repository.

## Deploy on Vercel

1. Sign in to [Vercel](https://vercel.com/) using your GitHub account.
2. Choose **Add New Project**, then import your portfolio repository.
3. Leave the detected Next.js framework and default build settings unchanged.
4. Choose **Deploy**. When the build completes, Vercel will show the live
   `vercel.app` link.

## Update the site later

Edit the files you want to change, then save your updates to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically builds and deploys each push to the connected repository.

## Personalize the portfolio

- Replace `public/images/sharmaine.jpg` to use a different portrait.
- Update your email address in `components/Hero.js` and `components/Contact.js`
  if it changes.
- Add earlier or future education records to the array in
  `data/education.js`. The comment above that array marks the place.
- Add projects to the array in `data/projects.js`.
- Adjust the `level` percentages in `data/skills.js` so the bars match your
  current learning progress.
