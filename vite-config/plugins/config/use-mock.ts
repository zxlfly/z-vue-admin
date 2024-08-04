import { viteMockServe } from "vite-plugin-mock"
export default function useMock() {
    return viteMockServe({
        mockPath: "src/mock",
        enable: true,
        logger: true,
    })
}
