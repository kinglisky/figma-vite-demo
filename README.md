# vite figma 插件示例

## 项目结构

.
├── README.md
├── lerna.json
├── manifest.json
├── package.json
├── packages
│   ├── common
│   │   ├── constants
│   │   │   └── ui.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── core
│   │   ├── favicon.svg
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── ui
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── App.vue
│   │   ├── env.d.ts
│   │   ├── main.ts
│   │   └── styles
│   │   └── index.css
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── scripts
│   └── build.js
├── tsconfig.json
└── yarn.lock

## 开发

```base
yarn
yarn start
```

