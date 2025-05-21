#!/bin/zsh
set -e

echo "Building site..."
hugo --minify

echo "Creating temporary branch..."
git checkout --orphan temp_gh_pages

echo "Adding generated files..."
git add -f public
git commit -m "Deploy site update $(date)"

echo "Pushing to gh-pages branch..."
git subtree push --prefix public origin gh-pages

echo "Cleaning up..."
git checkout main
git branch -D temp_gh_pages

echo "Deployment complete!"
