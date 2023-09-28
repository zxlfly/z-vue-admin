# z-vue-admin
## 基础配置
项目搭建的时候使用的node版本为**v20.6.0**  
包工具使用的**pnpm**
其余配置项参考根目录下的[build-process.md]("./build-process.md")

## 命名
关于文件命名，除了组件以外全部采用的是中横线+小写字母的形式！具体的其他规则参考开[发规范文档](https://zxlfly.github.io/web-front-end-specification/)！

## 关于样式开发注意事项
如果涉及到非ElementPlus组件需要写样式的时候，使用到的颜色值需要定义到全局的css变量中，整个项目应该统一集中常用的颜色！  
包括字体、背景、阴影等！根据需求添加。