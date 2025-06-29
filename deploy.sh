#!/bin/bash
# Enhanced deployment script

set -e

echo "🏗️  Building Hugo site..."
hugo --gc --minify

echo "📦 Preparing deployment..."
cd public

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    git remote add origin https://github.com/arts-link/rnkallday.com.git
fi

# Configure git
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Add all files
git add .
git commit -m "Deploy site - $(date)"

echo "🚀 Deploying to gh-pages..."
git push --force origin HEAD:gh-pages

echo "✅ Deployment complete!"
cd ..
