#!/bin/bash
echo "更新原因："
read up
git checkout main
git pull
rm -rf docs public
hugo
mv public docs
cp CNAME docs/
git add .
git commit -m $up
git push
echo "successs"
