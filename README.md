[![rnk all day build status](https://github.com/arts-link/rnkallday.com/actions/workflows/hugo.yml/badge.svg)](https://arts-link.github.io/rnkallday.com/)

## To create new content

```bash
# single story, the `index.md` utilizes the single template.
hugo new content <existing-section>/<story-name>/index.md
# new section, the `_index.md` utilizes the `list` template.
hugo new content <section-name>/_index.md
# new page in there
hugo new content <section-name>/<story-name>/index.md
# sections can be nested infinitely.
```

## To remove content

- change the draft status to true
- delete the directory