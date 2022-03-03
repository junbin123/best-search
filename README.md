# BestSearch

## 项目说明

体验地址：https://likeday-f4b2b-1300778416.tcloudbaseapp.com/

```sh
├── app # Redux状态管理
├── AppRoutes # 封装页面路由
├── components # 所有组件
├── pages # 页面组件，HomePage、SearchPage
├── types # typescript类型库
└── utils # 常用工具函数
```

1. Redux 定义了三个全局状态分别是

```
productTrends: [], // 搜索结果数组
keyword: '', // 搜索关键词
onRequest: false, // 是否请求中
```

2. AppRoutes 文件页面组件进行封装，不同页面公用同一个顶部导航栏

## 如何运行？

1. 安装依赖

```sh
yarn
```

2. 本地运行 or 打包

```sh
yarn start
# or
yarn build
```

## 技术栈

- React Redux
- Typescript
- React Router
- Tailwind CSS
- Material UI
- echarts

## 预览

![preview](https://img-blog.csdnimg.cn/26cff7e3f7744e5b9f685f7835311b6a.png)
