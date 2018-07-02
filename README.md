# vue  基础项目
## 目录结构
```
|
|-- dist  webpack打包目录
|-- node_modules  
|-- public
|--| src  源代码目录
|--|-- assets  图片等静态文件
|--|-- components  公共组件，存放可复用组件
|--|-- layout  布局组件
|--|-- store  vuex 入口文件
|--|--| utils  工具函数
|--|--|-- request.js  统一请求封装  
|--|--|-- utils.js
|--|--| views
|--|--|--| Demo  演示模块儿
|--|--|--|-- components  模块儿内私有组件
|--|--|--|-- store  模块儿内部的 store
|--|--|--|-- DemoPage1.vue  页面路由组件
|--|--|--|-- index.js  模块儿入口文件，导出模块儿内 store 和 路由组件
|--|--|--|-- service.js  api接口访问层
|--|-- App.vue  应用入口
|--|-- main.js  项目入口文件
|--|-- router.js  路由文件
|--|-- .env  环境变量
|--|-- .eslintrc.js  eslint配置文件
|--|-- .postcssrc.js  postcss配置文件
|--|-- babel.config.js  babel配置文件
|--|-- package.json


```
## 规范
1. eslint 基于 vue/standard，提交代码时必须通过 lint 校验
2. 按路由组件 split 代码，通过如下设置 component：
```
{
    path: 'about',
    name: 'about',
    component: () => import('./views/About'),
},
```
3. 项目统一使用 yarn 包管理工具管理锁定依赖包版本
4. 高度可复用组件写在 公共components目录，其他组件皆应写在模块儿内部私有components目录
5. 务必统一使用 utils/request.js 发起http请求，以便后期统一处理、拦截请求及替换请求工具