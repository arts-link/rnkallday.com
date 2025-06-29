#!/bin/bash

# Abort any ongoing merge or rebase
git merge --abort || git rebase --abort

# Create a backup branch of your current state
git checkout -b backup-branch

# Go back to main branch
git checkout main

# Reset to a clean state before the video was added
git reset --hard 11b5f24

# Create a new clean branch for your changes
git checkout -b clean-branch

# Now you'll need to manually edit the index.html file to include your YouTube embed
# After editing, run these commands:

# Add and commit your changes
# git add themes/word-nerd/layouts/index.html
# git commit -m "Update hero video to use outtaluv YouTube embed"

# Push this clean branch to GitHub
# git push -u origin clean-branch

echo "Script completed. Now you need to:"
echo "1. Edit themes/word-nerd/layouts/index.html to include your YouTube embed"
echo "2. Run: git add themes/word-nerd/layouts/index.html"
echo "3. Run: git commit -m \"Update hero video to use outtaluv YouTube embed\""
echo "4. Run: git push -u origin clean-branch"
echo "5. Create a pull request on GitHub from clean-branch to main"
