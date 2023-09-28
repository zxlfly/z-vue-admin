export default () => {
    return {
        config(config, env) {
            // 只是传给你 有没有执行配置文件: 没有
            console.log("config", config, env)
            // config: 目前的一个配置对象
            // production  development  serve build yarn dev yarn build
            // env: mode: string, command: string
            // config函数可以返回一个对象, 这个对象是部分的viteconfig配置【其实就是你想改的那一部分】
            const resolveAliasesObj = getTotalSrcDir(keyName)
            console.log("resolve", resolveAliasesObj)
            return {
                // 在这我们要返回一个resolve出去, 将src目录下的所有文件夹进行别名控制
                // 读目录
                resolve: {
                    alias: resolveAliasesObj,
                },
            }
        },
    }
}
