#!/bin/zsh
set -e

echo "Building site..."
hugo --minify

echo "Deploying to gh-pages branch using force push..."
git checkout -b gh-pages-tmp
git add -f public
git commit -m "Deploy site update $(date)"
git push -f origin `git subtree split --prefix public gh-pages-tmp`:gh-pages
git checkout main
git branch -D gh-pages-tmp

echo "Deployment complete!"
