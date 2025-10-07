import type { App } from "vue"
// 根据需求引入
import { ElMessage, ElMessageBox, ElNotification } from "element-plus"

export default (app: App) => {
    app.config.globalProperties.$message = ElMessage
    app.config.globalProperties.$msgbox = ElMessageBox
    app.config.globalProperties.$alert = ElMessageBox.alert
    app.config.globalProperties.$confirm = ElMessageBox.confirm
    app.config.globalProperties.$notify = ElNotification
}
