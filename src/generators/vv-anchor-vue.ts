// ./src/generators/vv-anchor-vue.ts

export interface GenerateVvAnchorVueOptions {
    filePathComment: string
    appVvFilePath: string
}

export default function (options:GenerateVvAnchorVueOptions): string {

return `<!-- ${options.filePathComment} -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, DefaultPalettes, SizesButtons, SizesText } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvAnchor as VueVentusVvAnchor } from '@obewds/vueventus'
    import appVv from '${options.appVvFilePath}'

    export default defineComponent({

        components: { VueVentusVvAnchor },

        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonFab,
            },
            buttonSize: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvAnchor.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.debug,
            },
            external: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.external,
            },
            href: {
                type: String,
                default: appVv.defaults.VvAnchor.href,
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes | keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvAnchor.palette,
            },
            textSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvAnchor.textSize,
            },
        },

    })

</script>

<template>

    <VueVentusVvAnchor
        :button="button"
        :button-block="buttonBlock"
        :button-fab="buttonFab"
        :button-size="buttonSize"
        :color="color"
        :debug="debug"
        :external="external"
        :href="href"
        :palette="palette"
        :text-size="textSize"
        :data-vv-anchor-prop-button="debug ? button : null"
        :data-vv-anchor-prop-button-block="debug ? buttonBlock : null"
        :data-vv-anchor-prop-button-fab="debug ? buttonFab : null"
        :data-vv-anchor-prop-button-size="debug ? buttonSize : null"
        :data-vv-anchor-prop-color="debug ? color : null"
        :data-vv-anchor-prop-external="debug ? external : null"
        :data-vv-anchor-prop-href="debug ? href : null"
        :data-vv-anchor-prop-palette="debug ? palette : null"
        :data-vv-anchor-prop-text-size="debug ? textSize : null"
    >
        <slot/>
    </VueVentusVvAnchor>

</template>
`;

}
