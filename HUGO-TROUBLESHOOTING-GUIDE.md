# Hugo Troubleshooting Guide

## CSS Processing Issues

If you encounter CSS processing errors when running the Hugo server, here are some steps to resolve them:

### 1. Update Browserslist Database

If you see an error message like this:
```
ERROR POSTCSS: failed to transform "/css/main.css" (text/css): Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
```

Run the following command to update the browserslist database:
```bash
npx update-browserslist-db@latest
```

### 2. Run Hugo Server with Cache-Disabling Flags

If you're still encountering CSS processing issues, try running the Hugo server with one or more of these flags:

```bash
# Disable HTTP caching (most effective)
hugo server --noHTTPCache

# Other helpful flags to try if needed
hugo server --disableFastRender
hugo server --ignoreCache
hugo server --noTimes
```

### 3. Check for Syntax Errors in CSS Files

If you see errors like:
```
SyntaxError: Unexpected token, expected "," (35:3)
```

Check your CSS files for syntax errors, particularly around the line mentioned in the error message.

### 4. Check for Merge Conflict Markers

Make sure there are no merge conflict markers (<<<<<<< HEAD, =======, >>>>>>> branch-name) in your:
- CSS files
- HTML templates
- JavaScript files
- Configuration files (tailwind.config.js, postcss.config.js)

### 5. Temporarily Disable PostCSS Processing

For development purposes, you can temporarily modify your templates to bypass PostCSS processing:

In `themes/word-nerd/layouts/partials/head/head.html`, change:
```html
{{ $css := resources.Get "css/main.css" | css.PostCSS }}
```

To:
```html
{{ $css := resources.Get "css/main.css" }}
```

Remember to change it back before deploying to production.

## Video Embed Issues

To update the YouTube embed in the hero section:

1. Edit `themes/word-nerd/layouts/index.html`
2. Find the iframe element with the YouTube embed
3. Update the `src` attribute with your new YouTube video ID
4. Make sure to include all necessary parameters: `autoplay=1&loop=1&mute=1&playsinline=1`

Example:
```html
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&loop=1&mute=1&playsinline=1"
  title="Your Video Title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop; mute; playsinline"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

## Viewport Meta Tag

Ensure your site has the correct viewport meta tag in the head section:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

This is essential for responsive design and is already correctly implemented in your theme.
