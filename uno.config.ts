import { defineConfig } from "unocss"
import presetAttributify from "@unocss/preset-attributify"
import transformerDirectives from "@unocss/transformer-directives"
import presetWind3 from "@unocss/preset-wind3"
export default defineConfig({
    presets: [presetAttributify(), presetWind3()],
    transformers: [transformerDirectives()],
})
