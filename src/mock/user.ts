import type { MockMethod, Recordable } from "vite-plugin-mock"
//用户信息数据
function createUserList() {
    return [
        {
            userId: 1,
            avatar: "https://avatars.githubusercontent.com/u/26324442?v=4",
            username: "admin",
            password: "123456",
            desc: "平台管理员",
            roles: ["平台管理员"],
            buttons: ["cuser.detail"],
            routes: [
                "Home",
                "Acl",
                "User",
                "Role",
                "Permission",
                "Product",
                "Trademark",
                "Attr",
                "Spu",
                "Sku",
            ],
            token: "Admin Token",
        },
        {
            userId: 2,
            avatar: "https://avatars.githubusercontent.com/u/26324442?v=4",
            username: "system",
            password: "123456",
            desc: "系统管理员",
            roles: ["系统管理员"],
            buttons: ["cuser.detail", "cuser.user"],
            routes: ["Home", "Product", "Trademark", "Attr", "Spu", "Sku"],
            token: "System Token",
        },
    ]
}
interface res {
    url: Recordable
    body: Recordable
    query: Recordable
    headers: Recordable
}
export default [
    {
        url: "/api/login",
        method: "post",
        response: ({ body }: res) => {
            //获取请求体携带过来的用户名与密码
            const { username, password } = body
            //调用获取用户信息函数,用于判断是否有此用户
            const checkUser = createUserList().find(
                (item) =>
                    item.username === username && item.password === password,
            )
            //没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: "账号或者密码不正确" } }
            }
            //如果有返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },

    // 获取用户信息
    {
        url: "/api/user/info",
        method: "get",
        response: (request: res) => {
            //获取请求头携带token
            const token = request.headers.authorization.replace("Bearer ", "")
            console.log("request", token)

            //查看用户信息是否包含有次token用户
            const checkUser = createUserList().find(
                (item) => item.token === token,
            )
            //没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: "获取用户信息失败" } }
            }
            //如果有返回成功信息
            return { code: 200, data: { ...checkUser } }
        },
    },
] as MockMethod[]
