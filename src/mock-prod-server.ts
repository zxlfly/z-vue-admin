import { createProdMockServer } from "vite-plugin-mock/client"
import userModule from "./mock/user"

export async function setupProdMockServer() {
    createProdMockServer([...userModule])
}
