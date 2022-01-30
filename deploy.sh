#!/usr/bin/env sh
# 生成静态文件
echo "正在执行编译~"
npm run buildbasis

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'zip pic'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# https://gitee.com/peinkid/peinkid.git
# https://github.com/peinkid/peinkid.github.io.git
echo "正在上传github~"
git push -f "https://gitee.com/peinkid/peinkid.git" master
echo "上传成功"
cd -