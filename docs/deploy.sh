#!/usr/bin/env sh
# 确保脚步抛出遇到的错误
set -e
npm run docs:build
cd docs/.vitepress/dist
git init
git add -A 
git commit -m 'deploy'
git push -f git@github:com:[git仓库名].git master:gh-pages
cd -