#!/bin/zsh
# resolve-workflow-conflict.sh
# This script follows the exact GitHub instructions for resolving merge conflicts

set -e

echo "Starting GitHub merge conflict resolution process..."
echo ""

# Step 1: Clone the repository or update your local repository with the latest changes
echo "Step 1: Clone the repository or update your local repository with the latest changes."
git pull origin main
echo ""

# Step 2: Switch to the head branch of the pull request
echo "Step 2: Switch to the head branch of the pull request."
git checkout fix/use-theme-scrolling-homepage
echo ""

# Step 3: Merge the base branch into the head branch
echo "Step 3: Merge the base branch into the head branch."
git merge main
echo ""

# Step 4: Fix the conflicts and commit the result
echo "Step 4: Fix the conflicts and commit the result."
echo "If you see merge conflicts above, please resolve them in your editor."
echo "After resolving conflicts, run: git add . && git commit -m 'Resolve merge conflicts'"
echo ""

# Step 5: Push the changes
echo "Step 5: Push the changes."
echo "git push -u origin fix/use-theme-scrolling-homepage"
echo ""

# Print current status
echo "Current status:"
git status
