#!/bin/zsh
# resolve-workflow-conflict.sh
# This script helps resolve the conflict between main and fix/use-theme-scrolling-homepage

set -e

echo "Starting conflict resolution process..."
echo ""

# Step 1: Make sure we're on the main branch
echo "Step 1: Checking out main branch"
git checkout main
echo ""

# Step 2: Pull the latest changes
echo "Step 2: Pulling latest changes"
git pull origin main
echo ""

# Step 3: Switch to the fix branch
echo "Step 3: Checking out fix/use-theme-scrolling-homepage branch"
git checkout fix/use-theme-scrolling-homepage 2>/dev/null || git checkout -b fix/use-theme-scrolling-homepage origin/fix/use-theme-scrolling-homepage
echo ""

# Step 4: Push your changes to the remote if you've made any local changes
echo "Step 4: Pushing any local changes to remote (if there are any)"
git push origin fix/use-theme-scrolling-homepage
echo ""

# Step 5: Go back to main and merge the fix branch
echo "Step 5: Going back to main branch"
git checkout main
echo ""

echo "Step 6: Merging fix/use-theme-scrolling-homepage into main"
git merge fix/use-theme-scrolling-homepage
echo ""

echo "If there are conflicts, please resolve them in your editor."
echo "After resolving conflicts, run: git add . && git commit -m 'Resolve merge conflicts'"
echo "Then push to origin: git push origin main"
echo ""

# Step 7: Verify the state
echo "Current status:"
git status
