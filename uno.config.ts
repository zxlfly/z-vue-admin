import { defineConfig } from "unocss"
import presetAttributify from "@unocss/preset-attributify"
import transformerDirectives from "@unocss/transformer-directives"
import presetWind3 from "@unocss/preset-wind3"
import presetIcons from "@unocss/preset-icons"
export default defineConfig({
    presets: [presetAttributify(), presetWind3(), presetIcons()],
    transformers: [transformerDirectives()],
})
