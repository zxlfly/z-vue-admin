# 搭建过程
整个项目基于vite + vue3 + pinia + ts

## 目录结构

## vite配置
vite-config将vite的配置进行的拆分

### plugins：存放各种插件配置
index.ts：所有配置的出口
#### auto-import.ts
- 自动导入
- 整个项目中使用"vue", "vue-router", "pinia"的时候不需要import
- 使用的插件是**unplugin-auto-import**/vite

#### components.ts
- 按需导入组件，可以不需要手动导入注册
- 我们自己写在src/components中的也一样有效
- 使用的插件是**unplugin-vue-components**/vite

#### extend-plus.ts
- 使用script setup的时候方便用来设置name属性
- 直接写在script上就可以了
- 使用的插件是**vite-plugin-vue-setup-extend-plus**

#### svg-icon.ts
- 自定义的svg-icon组件，自动使用“src/assets/icons/”下的svg文件

#### icon.ts
- 使用的**unplugin-icons**/vite
- 这个功能目前在考虑是否支持
- 一样用来处理使用icon组件的
    - 可以直接去官网查看支持的icon，直接import使用，会自动加载对应的icon文件，目前官方说支持按需访问数千个图标作为组件
    - 可以全量下载``npm i -D @iconify/json``所有图标集,只有使用到的才会被打包
    - 也可以``npm i -D @iconify-json/mdi``
    - 一般我们会配置autoInstall设置为true来让unplugin-icons自动加载
        - 当时用的时候就会自动能装对应的图标
        - 会自动识别使用npm、yarn、pnpm
    - 这样需要自行手动import
    - 需要配置types："unplugin-icons/types/vue"
    - icon常用网站：https://icones.netlify.app/
    ```
        <script setup>
            import IconAccessibility from '~icons/carbon/accessibility'
            import IconAccountBox from '~icons/mdi/account-box'
        </script>

        <template>
            <icon-accessibility/>
            <icon-account-box style="font-size: 2em; color: red"/>
        </template>
    ```
    - 可以配合components.ts完成自动导入，使用``import IconsResolver from 'unplugin-icons/resolver'``
        - resolvers: [IconsResolver()]
        - 自动引入是的时候也会自动的在components.ts中添加
    ```
        <template>
            <i-ep:apple style="font-size: 2em; color: red" />
        </template>
    ```
- 上面为使用方法，如果需要在项目中使用还是有些繁琐，想像使用普通icon组件那样就需要使用另一个插件****@iconify/vue****
    - 这个直接在我们自己写的svg-icon中使用
    - 队员组件改造下，如果传入的name中间有:就使用@iconify/vue，否则就是原来的
    - 但是这样有个问题，它不会自动下载icon资源显示的网络地址的，如果网络不行加载会很慢（目前是这样）

#### mock.ts
``pnpm i mockjs vite-plugin-mock @types/mockjs -D``
- 在需要使用mock的时候自动注入mock功能脚本
    - 功能写在“src/mockProdServer.ts”
    - 通过createProdMockServer将所有的mock中的内容导出
- src/mock/
    - 各种mock数据
### alias.ts 
- 别名配置

## axios封装
放在**src/request**中

## api封装

## 布局
主要分上下两大块
下面部分包括左边的菜单栏，和右边的主视图区域
上部分可以切换隐藏
菜单栏在上下布局只有顶部导航的时候是不显示的
菜单栏部门可以折叠
菜单栏可以切换样式为两列布局，第一列为一级菜单，第二列为子级菜单
需要抽离全局的css变量theme.scss


## 环境变量
- .env.development
- .env.production

## 路由
