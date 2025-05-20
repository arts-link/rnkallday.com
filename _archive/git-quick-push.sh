#!/bin/bash

# Quick Git commit and push script
# Usage: ./git-quick-push.sh "Your commit message"

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a commit message"
  echo "Usage: ./git-quick-push.sh \"Your commit message\""
  exit 1
fi

# Add all changes
git add .

# Commit with the provided message
git commit -m "$1"

# Push to the current branch
git push origin $(git symbolic-ref --short HEAD)

echo "✅ Changes committed and pushed successfully!"
