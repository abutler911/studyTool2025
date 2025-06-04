#!/bin/bash

# Auto-deploy script for Aircraft Limitations App
# Usage: ./deploy.sh [commit-message]

echo "🚀 Deploying Aircraft Limitations App..."

# Get git commit hash
GIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

# Get timestamp
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# Generate version
VERSION="${GIT_HASH}-${TIMESTAMP}"

echo "📦 Generated version: $VERSION"

# Update service worker
sed -i.bak "s/const CACHE_NAME = \"aircraft-limitations-[^\"]*\";/const CACHE_NAME = \"aircraft-limitations-$VERSION\";/" sw.js

echo "✅ Updated sw.js with new version"

# Add changes to git
git add .

# Use provided commit message or default
COMMIT_MSG="${1:-Auto-deploy with version $VERSION}"

# Commit and push
git commit -m "$COMMIT_MSG"
git push

echo "🎉 Deployed successfully!"
echo "📋 Cache version: aircraft-limitations-$VERSION"

# Clean up backup file
rm -f sw.js.bak