# Yili Real Madrid
中文名：伊利皇马活动

`2017年5月25日，皇家马德里俱乐部与伊利集团在西班牙马德里召开战略合作发布会。双方宣布伊利牛奶成为皇马官方营养乳制品，同时将面向中国青少年开展“携手皇马成长加冕”训练营活动，助力中国足球事业蓬勃发展。`

> 伊利皇马活动


#### 开发使用
> 下载或者克隆到本地 <br />
> npm run dev 启动应用
> npm run build 打包 

#### 开发环境
> 后端接口使用PHP编写 <br />
> 前端技术栈采用Vue2+VueRouter+Webpack+Axios 

#### 目录结构
>├── README.md----// 项目说明文档 <br />
 ├── node_modules----// 项目依赖包文件夹 <br />
 ├── build----// 编译配置文件，一般不用管 <br />
 │   ├── build.js <br />
 │   ├── check-versions.js <br />
 │   ├── dev-client.js <br />
 │   ├── dev-server.js <br />
 │   ├── utils.js <br />
 │   ├── vue-loader.conf.js <br />
 │   ├── webpack.base.conf.js <br />
 │   ├── webpack.dev.conf.js <br />
 │   └── webpack.prod.conf.js <br />
 ├── config----//项目基本设置文件夹 <br /> 
 │   ├── dev.env.js----// 开发配置文件 <br />
 │   ├── index.js----// 配置主文件 <br />
 │   └── prod.env.js----// 编译配置文件 <br />
 ├── index.html----// 项目入口文件 <br />
 ├── package-lock.json----// npm5 新增文件，优化性能 <br />
 ├── package.json----// 项目依赖包配置文件 <br />
 ├── src----// 我们的项目的源码编写文件 <br />
 │   ├── App.vue  // APP入口文件<br />
 │   ├── api // 接口调用工具文件夹<br />
 │   │   └── index.js // 接口调用工具<br />
 │   ├── components // 组件文件夹，目前为空<br />
 │   ├── config // 项目配置文件夹<br />
 │   │   └── index.js // 项目配置文件<br />
 │   ├── frame  // 子路由文件夹<br />
 │   │   └── frame.vue // 默认子路由文件<br />
 │   ├── main.js // 项目配置文件<br />
 │   ├── page // 我们的页面组件文件夹<br />
 │   │   ├── content.vue // 准备些 cnodejs 的内容页面<br />
 │   │   └── index.vue// 准备些 cnodejs 的列表页面<br />
 │   ├── router // 路由配置文件夹<br />
 │   │   └── index.js // 路由配置文件<br />
 │   ├── style // scss 样式存放目录<br />
 │   │   ├── base // 基础样式存放目录<br />
 │   │   │   ├── _base.scss// 基础样式文件<br />
 │   │   │   ├── _color.scss//项目颜色配置变量文件<br />
 │   │   │   ├── _mixin.scss// scss混入文件<br />
 │   │   │   └── _reset.scss//浏览器初始化文件<br />
 │   │   ├── scss // 页面样式文件夹<br />
 │   │   │   ├── _content.scss//内容页面样式文件<br />
 │   │   │   └── _index.scss// 列表样式文件<br />
 │   │   └── style.scss // 主样式文件<br />
 │   └── utils // 常用工具文件夹<br />
 │        └── index.js // 常用工具文件<br />
 └── static----// 资源放置目录 <br />

#### 开发条件
> php环境 <br />
node7.0版本 <br />
vue2.0脚手架 <br />
Element UI <br />
Mysql数据库

#### 预览地址
[伊利皇马活动](http://palpitation.shop/web/yl/ "伊利皇马活动") 

#### 开发人员
> 自然是作者啦（~v~）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
