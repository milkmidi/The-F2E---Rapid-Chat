cd dist
git rm -rf .git
git init
git add .
git commit -a -m "deploy to Github pages"
git push --force git@github.com:milkmidi/The-F2E---Rapid-Chat.git master:gh-pages
start "https://milkmidi.github.io/The-F2E---Rapid-Chat/"
