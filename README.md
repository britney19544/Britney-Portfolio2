# Britney Jessica Saslim - Portfolio

Plain HTML, CSS and JavaScript. No install needed: open `index.html` in a browser.
To put it online, upload this whole folder to Vercel, Netlify or GitHub Pages.

## Folder map

```
index.html          all the text and page content
css/
  1-variables.css   COLORS and theme (start here to change colors)
  2-base.css        page background, blobs, links, footer
  3-components.css  glass effect, buttons, project cards, tags
  4-nav.css         navbar
  5-hero.css        first screen and stats strip
  6-sections.css    headings and project/skills grid
  7-contact.css     "Let's build something together" box
  8-modals.css      popups and image preview
  9-responsive.css  phone layout (keep last)
js/
  nav.js            highlights the current link in the navbar
  certificates.js   certificates popup and image preview
  popups.js         organizations and Taniku popups
certificates/       your certificate images
```

## How to change things

**Text, links, email, phone:** open `index.html` and use Ctrl+F (Cmd+F) to find the text. Sections are labeled with comments like `<!-- ===== PROJECTS ===== -->`.

**Colors:** `css/1-variables.css`. Change `--accent` for the main teal. The dark mode colors are in the 2nd and 3rd blocks of that file.

**Add a project:** in `index.html`, find a `<!-- PROJECT: ... -->` comment, copy that whole `<article>...</article>`, paste it below, and edit the text. Size classes: `c3` = half width, `c2` = one third, `c6` = full width.

**Add a skill:** in the Skills section, copy one `<span>Name</span>` and change the name.

**Certificates:** save your images in `certificates/` with the same names as now (`garuda-hacks.jpg`, `find-it-ugm.jpg`, `python-binus.jpg`). The ones in the folder are SAMPLES, so replace them. To add another, copy a `<figure>` block inside `<dialog id="certs">` and change the file name and caption.

**Add another popup:** copy a `<dialog id="orgs">` block, give it a new id, and put `data-dialog="your-id"` on the box or button that should open it.

**Fonts:** the font (Plus Jakarta Sans) loads from Google Fonts in the `<head>` of `index.html`. It needs internet to show exactly as designed.
