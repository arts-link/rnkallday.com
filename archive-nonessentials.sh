#!/bin/bash

# Create an archive folder
mkdir -p _archive

# Move known non-essential or clutter folders/files to _archive
mv public _archive/ 2>/dev/null
mv node_modules _archive/ 2>/dev/null
mv *.zip _archive/ 2>/dev/null
mv new.components _archive/ 2>/dev/null
mv scroll\ function _archive/ 2>/dev/null
mv gsap-horizontal-scroll-loop _archive/ 2>/dev/null
mv src _archive/ 2>/dev/null
mv dist _archive/ 2>/dev/null
mv .ENVIRONMENT _archive/ 2>/dev/null
mv .gitconfig _archive/ 2>/dev/null
mv .condarc _archive/ 2>/dev/null
mv cleanup-script.sh _archive/ 2>/dev/null
mv git-quick-push.sh _archive/ 2>/dev/null

# Optionally archive alternate themes or unused directories
mv portfolio-site _archive/ 2>/dev/null
mv themes/ryder _archive/ 2>/dev/null
mv themes/word-nerd _archive/ 2>/dev/null

# Confirm what's left
echo "Remaining project structure:"
ls -lah

echo -e "\n✅ Non-essential files have been moved to _archive/. You can safely delete or revisit later."
