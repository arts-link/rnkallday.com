#!/bin/zsh
# resolve-workflow-conflict.sh
# This script follows the exact GitHub merge conflict resolution steps

set -e

echo "Starting GitHub merge conflict resolution process..."
echo ""

# Step 1: Clone the repository or update your local repository with the latest changes
echo "Step 1: Pulling the latest changes"
git pull origin main
echo ""

# Step 2: Switch to the head branch of the pull request
echo "Step 2: Switching to the fix/use-theme-scrolling-homepage branch"
git checkout fix/use-theme-scrolling-homepage 2>/dev/null || git checkout -b fix/use-theme-scrolling-homepage origin/fix/use-theme-scrolling-homepage
echo ""

# Step 3: Merge the base branch (main) into the head branch
echo "Step 3: Merging main branch into fix/use-theme-scrolling-homepage"
git merge main
echo ""

# Step 4: Fix conflicts and commit the result
echo "If you see merge conflicts above, please resolve them in your editor."
echo "After resolving conflicts, run: git add . && git commit -m 'Resolve merge conflicts'"
echo ""

# Step 5: Push the changes to GitHub
echo "Step 5: After resolving conflicts (if any), push the changes with:"
echo "git push -u origin fix/use-theme-scrolling-homepage"
echo ""

# Print current status
echo "Current status:"
git status
