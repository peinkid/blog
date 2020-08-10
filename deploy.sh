#!/usr/bin/env sh
# 生成静态文件
echo "正在执行编译~"
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'update'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
echo "正在上传github~"
git push -f "https://github.com/peinkid/peinkid.github.io.git" master
echo "上传成功"
cd -