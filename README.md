# Welcom to Sharpfle InvenCheck APP!!! 
## this APP helps you to check the inventory of your Cafe!

### A note to myself
[how to update web online]

1. npm run build
2. git add .
3. git commit -m "(the update info)"
4. git push origin (the branch)
5. npm run deploy


## What framework I use?
I use Vue 3 + TypeScript + Vite to build this APP, and I use

### More info: Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# About level control
## 1. 先切回主分支，把線上最新的扣抓下來
git checkout main
git pull origin main

## 2. 檢查一下有哪些分支已經合併過了（後面會顯示已合併的分支，方便你安心刪除）
git branch --merged

## 3. 刪除本地的功能分支
git branch -d my-feature-branch

## 4. 刪除線上的功能分支
git push origin --delete my-feature-branch

## 5. 最後把線上的最新狀態與本地同步（清除幽靈分支紀錄）
git fetch -p

# npm codes

  "scripts": {
    "dev": "vite",
    "clean": "rimraf dist",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist --nojekyll"
  },